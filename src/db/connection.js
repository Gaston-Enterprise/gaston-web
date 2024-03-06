const { MongoClient } = require("mongodb");
// const { MONGO_URI } = require("../utils/config.js");
const dotenv = require("dotenv").config();
const generateRandomEngines = require("./faker")

async function main() {
  // const result = dotenv.config()

  if (dotenv.error) {
    throw dotenv.error;
  }
  console.log(dotenv.parsed)

  const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_CONFIGS}`;

  // console.log(MONGO_URI);
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect().then(console.log("Connected to Mongo db"));
    await listDatabases(client);

    const db = client.db("Gaston");
    const engineColl = db.collection("Engines")

    const existingEngines = await getSavedEngines(collection);


    // const engines = await generateRandomEngines(5)
    // await insertEngines(client, engines)
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

async function getSavedEngines (collection) {
  try {
    const existingEngines = await collection.find()
    return existingEngines;
  } catch (error) {
    console.error(error);
  }
}

async function insertEngines (client, engines) {
  const result = await client.db("Gaston").collection("Engines").insertMany(engines);
  console.log(`Inserted engines: ${result.insertedCount} engines created with the following ids: `);
  console.log(`${result.insertedIds}`);
}

async function listDatabases(client) {
  const databaseList = await client.db().admin().listDatabases();
  console.log("Databases: ");
  databaseList.databases.forEach((db) => {
    console.log(`-${db.name}`);
  });
}

main().catch((err) => console.error(err));

module.exports = getSavedEngines;
