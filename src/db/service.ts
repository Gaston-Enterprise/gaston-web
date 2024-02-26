import mongoose, { Schema, model } from "mongoose";

interface Service {
  engine: mongoose.Types.ObjectId; // Reference to the engine document
  customer_name: string;
  actions_performed: string[];
  recommendations: string;
  hours_ran:number;
  serviced_by:string[];
  serviceDate: Date;
  nextServiceDate: Date;
}

const serviceSchema = new Schema<Service>({
  engine: {
    type: Schema.Types.ObjectId,
    ref: "Engine",
  },
  customer_name: String,
  actions_performed: [String],
  recommendations: String,
  hours_ran: Number,
  serviced_by:[String],
  serviceDate: Date,
  nextServiceDate: Date,
});

export const Service = model<Service>("Service", serviceSchema);
