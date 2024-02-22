"use client";

import React, { useState } from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
      <div className="" >

        <div className="my-3" >
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Required"
            defaultValue="Client Name"
          />
        </div>

        <div  className="my-3">
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="Scheduled Maintenace"
            helperText="Nature of Visit"
          >
            {natureOfVisit.map((service) => (
              <MenuItem key={service.id} value={service.id}>
                {service.service}
              </MenuItem>
            ))}
          </TextField>
        </div>
        
        <div className="my-3">Banner showing Information About Engine </div>
        
        <div className="my-3">
          <TextField
            id="outlined-textarea"
            label="Problem Information"
            placeholder="Example: Generator Service"
            multiline
            size="small"
          />
        </div>

        <div className="my-3">
          {" "}
          <TextField
            id="outlined-multiline-static"
            label="Visitation information"
            multiline
            rows={4}
            defaultValue="Work Done"
            size="small"
          />
        </div>

        <div> <TextField
          id="outlined-textarea"
          label="Recommendations"
          placeholder="Placeholder"
          multiline
        /></div>
      </div>
    
    </form>
  );
};

export default page;
