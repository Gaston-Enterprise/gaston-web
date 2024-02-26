const express = require("express");
const mongoose = require("mongoose");

const Engine = require("../db/engine")
const Service = require("../db/service")


const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());



app.get("api/engine", async (req, res) => {
  try {
    const { clientName } = req.query;
    const engine = await Engine.findOne({ clientName });
    res.json(engine);
  } catch (error) {
    console.error("Error searching for engine: ", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
});

app.post("api/service", async (req, res) => {
  try {
    const { serviceData } = req.body;
    const newService = new Service(serviceData);
    await newService.save();
    res.status(201).json({ message: "Service saved successfully" });
  } catch (error) {
    console.error("Error saving service:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
