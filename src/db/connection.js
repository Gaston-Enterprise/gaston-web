const { MongoClient } = require("mongodb");
// const { MONGO_URI } = require("../utils/config.js");

async function main() {

  console.log(`${process.env.MONGO_DB_URI}`)
  console.log(`${process.env.MONGO_DB_PASSWORD}`)
  console.log(`${process.env.MONGO_CONFIGS}`)
  const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_CONFIGS}`;

  console.log(MONGO_URI);
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect().then(console.log("Connected to Mongo db"));
    await listDatabases(client);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
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
