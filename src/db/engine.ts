import mongoose, { Schema, model } from "mongoose";

interface Engine {
  name: string;
  serial_number: string;
  rating: number;
  Model: string;
  parts: {
    oilFilter: number;
    fuelFilter: number;
    airFilter: number;
  };
  location: string;
  hourReading: number;
  contacts?: {
    phoneNumber: number;
    email: string;
  };
  lastServicedDate: Date;
  nextServiceDate: Date;
}

const engineSchema = new Schema<Engine>({
  name: String,
  serial_number: String,
  rating: Number,
  Model: String,
  parts: {
    oilFilter: Number,
    fuelFilter: Number,
    airFilter: Number,
  },
  location: String,
  hourReading: Number,
  contacts: {
    phoneNumber: Number,
    email: String,
  },
  lastServicedDate: Date,
  nextServiceDate: Date,
});

export const Engine = model<Engine>("Engine", engineSchema);
