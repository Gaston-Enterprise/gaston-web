import mongoose from "mongoose";
// const dotenv = require("dotenv").config();
import dotenv from "dotenv";
import { Engine } from "./engine";
import { Client } from "./client";

const res = dotenv.config();
if (res.error) {
  throw res.error;
}
console.log(res.parsed);

const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_CONFIGS}`;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(MONGO_URI, {dbName: "Gaston"}).then(async () => {
      console.log("Connected to the database");
      const collections = await mongoose.connection.db
        .listCollections()
        .toArray();

      // Extract the collection names
      const collectionNames = collections.map((collection) => collection.name);

      // Log the collection names
      console.log("Collections:", collectionNames);
      const client = await Client.findOne({client_name: "Johnson LLC"}).exec();
      // const engs = await Engine.find({}).exec();
      console.log("Client found is %s ", client);
      // console.log(engs);
    });
    //   const enginesFromDb = await Client.findOne({client_name:"Johnson LLC"})
  } catch (error) {
    console.log(error);
  }
}
