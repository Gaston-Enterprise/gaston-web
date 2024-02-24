"use client";

import React, { useState } from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "@mui/material/MenuItem";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Select,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import EngineInformation from "@/components/EngineInformation";

const natureOfVisit = [
  { id: 1, service: "Scheduled Maintenace" },
  { id: 2, service: "Emergency Call" },
];

const page = () => {
  const [clientName, setClientName] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTodoChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setTodos((prevTodos) => [...prevTodos, value]);
    } else {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo !== value));
    }
  };

  const handleClientName = (e: React.FormEvent<HTMLInputElement>) => {
    setClientName((e.currentTarget as HTMLInputElement).value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col my-12 container items-center mx-auto py-5 bg-gray-200 rounded"
    >
      <div className=" max-w-fit">
        <div className="my-3 flex items-center justify-around">
          <TextField
            // required
            size="small"
            id="outlined-required"
            label="Customer Name"
            sx={{fontSize: 20}}
          />
          <button type="submit" ><SearchIcon/></button>
        </div>

        <div className="my-3"><EngineInformation/> </div>

        <div className="my-3 text-xs">
          <FormGroup className="flex flex-row items-center">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Scheduled Maintenace"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Emergency Call"
            />
            
          </FormGroup>
        </div>

       

        <div className="my-3">
          <TextField
            id="outlined-textarea"
            label="Problem Information"
            multiline
            fullWidth
            // size="small"
          />
        </div>

        {/* <div>
          <TextField
          id="outlined-helperText"
          label="Solution information"
          // defaultValue="Default Value"
         
          />
        </div> */}

        <div className="my-3">
          {" "}
          <TextField
          fullWidth
            id="outlined-multiline-static"
            label="Solution information"
            multiline
            rows={4}
            // defaultValue="Work Done"
            // size="small"
            helperText="List of steps taken by engineer"
          />
        </div>

        <div>
          {" "}
          <TextField
            id="outlined-textarea"
            label="Recommendations"
            // placeholder="Placeholder"
            multiline
            fullWidth
            // size="small"
          />
        </div>
        <div className=" flex justify-center my-3" >
            <button
              type="submit"
              className="group relative  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
      </div>
    </form>
  );
};

export default page;
