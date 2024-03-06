import { Schema, model} from "mongoose";
import { ServiceType } from "@/types/types";

const serviceSchema = new Schema<ServiceType>({
  engine: {
    type: Schema.Types.ObjectId,
    ref: "Engine",
  },
  customer_name: String,
  actions_performed: [String],
  recommendations: String,
  hours_ran: Number,
  serviced_by: [String],
  serviceDate: Date,
  nextServiceDate: Date,
});

export const Service = model<ServiceType>("Service", serviceSchema);
