const mongoose = require("mongoose")
const MONGO_URI = require("@/utils/config")
const  generateRandomEngines  = require("./faker")
const Engine = require("./engine")
// import mongoose from "mongoose";
// import MONGO_URI from "@/utils/config";
// import generateRandomEngines from "./faker";
// import { Engine } from "./engine";

mongoose.connect(MONGO_URI).then(()=> console.log("Connecyion successfull")
).catch((error: Error) => console.error(error));

async function saveEngines() {
  const engines = await generateRandomEngines();
  Engine.insertMany(engines)
    .then(() => console.log("Engine data saved successfully"))
    .catch((err:Error) => console.error(err))
    .finally(() => mongoose.disconnect());
}
 saveEngines()