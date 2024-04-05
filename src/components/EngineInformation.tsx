import mongoose from "mongoose";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { findEngine } from "../api/actions";
import CircularProgress from '@mui/material/CircularProgress';
import { EngineDataType } from "../types/types";
// type clientData = {
//   clientName: string
// }

const EngineInformation = () => {
  const [loading, setLoading] = useState(false)
  const [engineData, setEngineData] = useState<any>({
    engineSerialNo: "",
    engRating: "",
    engModel: "",
    lastHourValue: "",
    lastServiceDate: "",
    engLocation: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target as HTMLFormElement);
    const data = await findEngine(formData);
    console.log("From frontend: ", data);
    
    setEngineData(data);
    setLoading(false)
  };

  return (
    <>
      <form onSubmit={handleSubmit} name="EngineInfo-form">
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
      </form>

    {
      loading? (
        <div>
          <CircularProgress/>
        </div>
      ) : (<div>
          {engineData && (
        <div className="grid grid-cols-2 gap-5 text-sm">
          <div className="my-3">
            <div className="flex flex-col">
              <span className="my-1">
                Eng. serial number: <em>{engineData.engineSerialNo}</em>{" "}
              </span>
              <span className="my-1">
                Machine rating: <em>{engineData.engRating}</em>{" "}
              </span>
              <span className="my-1">
                Model: <em>{engineData.engModel}</em>{" "}
              </span>
            </div>
          </div>

          <div className="my-3">
            <div className="flex flex-col">
              <span className="my-1">
                Last hour reading: <em>{engineData.lastHourValue}</em>
              </span>
              <span className="my-1">
                Current Hour reading: <em>121Hrs</em>
              </span>
              <span className="my-1">
                Location: <em>{engineData.engLocation}</em>
              </span>
            </div>
          </div>
        </div>
      )}
      </div>)
    }

      
    </>
  );
};

export default EngineInformation;
