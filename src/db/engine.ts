import mongoose, { Schema, model } from "mongoose";
import { EngineType } from "@/types/types";

// const {Schema, model} = require("mongoose")
// const {EngineType} = require("@/types/types")

const engineSchema = new Schema<EngineType>({ 
  _id: String,
  serial_number: String,
  rating: Number,
  Model: String,
  parts: {
    oilFilter: Number,
    fuelFilter: {
      type: String,
      enum: ["117", "145", "163", "201", "244", "492"]
    },
    airFilter: Number,
  },
  location: String,
  hourReading: Number,
  contacts: {
    phoneNumber: String,
    email: String,
  },
  lastServicedDate: Date,
  nextServiceDate: Date,
});

export const Engine = model<EngineType>("Engine", engineSchema, "Engines");
