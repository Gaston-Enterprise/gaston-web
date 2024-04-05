"use server";

import mongoose from "mongoose";
import MONGO_URI from "@/utils/config.js";
import { Client } from "../db/client";
import { ClientDataType, EngineDataType } from "../types/types"

export const findEngine = async (formData: FormData) => {
    
  let engineData = {} as EngineDataType
 
    const clientName = formData.get("clientName");
    await mongoose.connect(MONGO_URI, { dbName: "Gaston" }).then(async () => {
      const clientData= await Client.findOne({
        client_name: clientName,
      }).exec();
      if (!clientData) {
        console.log("Client data not found");
      }  else {
        const clientDataObject = clientData.toObject() as ClientDataType;
        engineData.engineSerialNo = clientDataObject.engine?.serial_number;
        engineData.engRating = clientDataObject.engine?.rating;
        engineData.engModel = clientDataObject.engine?.Model
        engineData.lastHourValue = clientDataObject.engine?.hourReading
        engineData.lastServiceDate = clientDataObject.engine?.lastServicedDate
        engineData.engLocation = clientDataObject.engine?.location
      }
      console.log(engineData);
      
      return engineData
    });
}