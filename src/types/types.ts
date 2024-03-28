import mongoose from "mongoose";

type fuelFilterType = "117" | "145" | "163" | "201" | "244" | "492";

export type EngineType  = {
  // name: string;
  _id: string;
  serial_number: string;
  rating: number;
  Model: string;
  parts: {
    oilFilter: number;
    fuelFilter: fuelFilterType;
    airFilter: number;
  };
  location: string;
  hourReading: number;
  contacts?: {
    phoneNumber: string;
    email: string;
  };
  lastServicedDate: Date;
  nextServiceDate: Date;
}

type NatureOfVisit = "service" | "emergency"

export interface ServiceType {
  engine: EngineType["_id"] | mongoose.Types.ObjectId;// Reference to the engine document
  customer_name: string;
  nature_of_visit: NatureOfVisit;
  actions_performed: string[];
  recommendations: string;
  hours_ran: number;
  serviced_by: string[];
  serviceDate: Date;
  nextServiceDate: Date;
}

type ContactInfo = {
  phoneNumber?: string;
  email?: string;
}

type ClientPaymentStatement = {
  payment_date: Date;
  amount: number;
  description: string;
}

export type ClientType = {
  client_name: string;
  engine: EngineType["_id"] | mongoose.Types.ObjectId;
  contacts?: ContactInfo;
  payment_statement: ClientPaymentStatement[];
  services:ServiceType;
}

export type ClientDataType = {
  client_name: string;
  engine: EngineType;
  contacts?: ContactInfo;
  payment_statement: ClientPaymentStatement[];
  services:ServiceType;
}

export type engineDataType = {
  engineSerialNo: string;
  engRating:number;
  engModel:string;
  lastHourValue: Date;
  lastServiceDate: Date;
  engLocation:string;
}