"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var mongoose_1 = require("mongoose");
// const model = require("mongoose")
// const Schema = require("mongoose");
// const  { Schema } = require("mongoose");
// const { EngineType } = require("@/types/types");
var engineSchema = new mongoose_1.Schema({
    _id: String,
    serial_number: String,
    rating: Number,
    Model: String,
    parts: {
        oilFilter: Number,
        fuelFilter: {
            type: String,
            enum: ["117", "145", "163", "201", "244", "492"],
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
exports.Engine = (0, mongoose_1.model)("Engine", engineSchema);
// module.exports = { Engine };
