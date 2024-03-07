const { MongoClient } = require("mongodb");
// const { MONGO_URI } = require("../utils/config.js");
const dotenv = require("dotenv").config();
const generateRandomEngines = require("./faker");
const {generateRandomClients} = require("./faker.js");

if (dotenv.error) {
  throw dotenv.error;
}
console.log(dotenv.parsed);

const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_CONFIGS}`;

// console.log(MONGO_URI);
const dbClient = new MongoClient(MONGO_URI);

async function main() {
  try {
    await dbClient.connect().then(console.log("Connected to Mongo db"));
    const db = dbClient.db("Gaston");
    const clientsCollection = db.collection("Clients");
    const engineCollection = db.collection("Engines");
    const existingEngines = await getSavedEngines(engineCollection);
    console.log("Existing engines:", existingEngines);

    const generatedClients = await generateRandomClients(5, existingEngines);
    await insertClients(clientsCollection, generatedClients).then(()=>console.log("Inserted to db"));

    // const engines = await generateRandomEngines(5)
    // await insertEngines(client, engines)
  } catch (error) {
    console.error(error);
  } finally {
    await dbClient.close();
  }
}

async function getSavedEngines(collection) {
  try {
    const existingEngines = await collection.find({}).toArray();
    return existingEngines;
  } catch (error) {
    console.error(error);
  }
}

async function insertEngines(client, engines) {
  const result = await client
    .db("Gaston")
    .collection("Engines")
    .insertMany(engines);
  console.log(
    `Inserted engines: ${result.insertedCount} engines created with the following ids: `
  );
  console.log(`${result.insertedIds}`);
}

async function insertClients(collection, clients) {
  try {
    const result = await collection.insertMany(clients);
    console.log(
      `Inserted clients: ${result.insertedCount} clients created with the following ids: `
    );
    console.log(`${result.insertedIds}`);
  } catch (error) {
    console.error(error);
  }
}

async function listDatabases(client) {
  const databaseList = await client.db().admin().listDatabases();
  console.log("Databases: ");
  databaseList.databases.forEach((db) => {
    console.log(`-${db.name}`);
  });
}

main().catch((err) => console.error(err));

module.exports = dbClient;
