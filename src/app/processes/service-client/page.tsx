"use client";

import React, { useEffect, useState } from "react";
import axios from "axios"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  FormGroup,
  FormControlLabel,
  InputLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import EngineInformation from "@/components/EngineInformation";

const page = () => {
  const [form, setForm] = useState({
    clientName: "",
    natureOfVisit: "scheduled maintenance",
    problemInformation: "",
    solutionInformation: [] as string[],
    recommendations: "",
    hoursRan:"",
    serviceDate: null,
    nextServiceDate: null,
    servicedBy: [] as string[]
  });
  const [engineInfo, setEngineInfo] = useState(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // console.log(form);

    // 2. Reset the form state to empty values
    setForm({
      clientName: "",
      natureOfVisit: "scheduled maintenance",
      problemInformation: "",
      solutionInformation: [],
      recommendations: "",
      hoursRan: "",
      serviceDate: null,
      nextServiceDate: null,
      servicedBy: []
    });
    
  };

  const fetchEngineInformation = async () => {
    try {
      const response = await axios.get(`/api/engineInfo/?clientName=${form.clientName}`)
      console.log(response.data);
      
      setEngineInfo(response.data)
    } catch (error) {
      console.error('Error fetching client information:', error);
    }
  }

  useEffect(() => {
    if (form.clientName) {
      fetchEngineInformation()
    } else {
      setEngineInfo(null)
    }
  }, [form.clientName])

  return (
    <form
    id="service-form"
      onSubmit={handleSubmit}
      className=" flex flex-col my-12 container items-center mx-auto py-5 bg-gray-200 rounded"
    >
      <div className=" max-w-fit">
        <div className="my-3 flex items-center justify-around">
          <TextField
            // required
            size="small"
            id="Customer-Name"
            label="Customer Name"
            sx={{ fontSize: 20 }}
            value={form.clientName}
            onChange={(e) => setForm({ ...form, clientName: e.target.value })}
          />
          <button type="submit" >
            <SearchIcon />
          </button>
        </div>

        <div className="my-3">
          <EngineInformation  />{" "}
        </div>

        <div className="flex flex-row gap-4 items-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                sx={{
                  width: 150,
                  // height: 20
                }}
                label={"Date of Service"}
                views={["year", "day", "month"]}
                value={form.serviceDate}
                onChange={(date) =>setForm({...form, serviceDate:date})}
              />
              <DatePicker
                sx={{
                  width: 150,
                  // height: 50
                }}
                label={"Next Date of Service"}
                views={["year", "day", "month"]}
                value={form.nextServiceDate}
                onChange={(date)=>setForm({...form, nextServiceDate:date})}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="my-3 text-xs">
          <FormGroup className="flex flex-row items-center">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Scheduled Maintenace"
            />
            <FormControlLabel control={<Checkbox />} label="Emergency Call" />
          </FormGroup>
        </div>

        <div className="my-3">
          <TextField
            id="Problem-Information"
            label="Problem Information"
            multiline
            fullWidth
            value={form.problemInformation}
            onChange={(e) => setForm({ ...form, problemInformation: e.target.value })}
            // size="small"
          />
        </div>

        <div className="my-3">
          {" "}
          <TextField
            fullWidth
            id="Solution-information"
            label="Solution information"
            multiline
            rows={4}
            value={form.solutionInformation}
            onChange={(e) =>
              setForm({ ...form, solutionInformation: [e.target.value] })
            }
            helperText="List of steps taken by engineer"
          />
        </div>

        <div  className="my-3">
          {" "}
          <TextField
            id="Recommendations"
            label="Recommendations"
            // placeholder="Placeholder"
            multiline
            fullWidth
            value={form.recommendations}
            onChange={(e) => setForm({ ...form, recommendations: e.target.value })}
            // size="small"
          />
        </div>
        <div className="my-5 flex flex-row justify-between">
          <TextField
            id="Generator-hours"
            label="Generator hours"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: 150
            }}
            value={form.hoursRan}
            onChange={(e) => setForm({ ...form, hoursRan: e.target.value })}
            // size="small"
            helperText="Time in hours"
          />
          <TextField
            id="engineer-name"
            label="Engineer's name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={form.servicedBy}
            sx={{
              width: 150
            }}
            onChange={(e) => setForm({ ...form, servicedBy: [e.target.value] })}
          />
        </div>

        <div className=" flex justify-center my-3">
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
