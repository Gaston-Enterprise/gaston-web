import mongoose from "mongoose";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MONGO_URI from "@/utils/config.js";
import { Client } from "../db/client.ts";
import { ClientDataType, EngineDataType } from "../types/types"

// type clientData = {
//   clientName: string
// }

const EngineInformation =() => {
  const findEngine = async (formData: FormData) => {
    "use server";
    const engineData:EngineDataType = {}
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
    });
  };

  return (
    <>
      <form action={findEngine}>
        <div>Engine Information</div>
        <div className="my-3 flex items-center justify-around">
          <TextField
            // required
            size="small"
            id="Customer-Name"
            label="Customer Name"
            sx={{ fontSize: 20 }}
            name="clientName"
            // onChange={(e) => setForm({ ...form, clientName: e.target.value })}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 text-sm">
          <div className="my-3">
            <div className="flex flex-col">
              <span className="my-1">
                Eng. serial number: <em>{engineSerialNo}</em>{" "}
              </span>
              <span className="my-1">
                Machine rating: <em>15kVA</em>{" "}
              </span>
              <span className="my-1">
                Model: <em>MPLS156S-1-SR</em>{" "}
              </span>
            </div>
          </div>

          <div className="my-3">
            <div className="flex flex-col">
              <span className="my-1">
                Last hour reading: <em>121Hrs</em>
              </span>
              <span className="my-1">
                Current Hour reading: <em>121Hrs</em>
              </span>
              <span className="my-1">
                Location: <em>Nairobi</em>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EngineInformation;
