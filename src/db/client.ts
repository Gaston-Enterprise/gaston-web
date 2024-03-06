import { ClientType } from "@/types/types";
import { Schema, model } from "mongoose";

const clientSchema = new Schema<ClientType>({
  client_name: String,
  engine: {
    type: Schema.Types.ObjectId,
    ref: "Engine",
  },
  contacts: {
    phoneNumber: String,
    email: String,
  },
  payment_statement: {
    type: [
      {
        payment_date: Date,
        amount: Number,
        description: String,
      },
    ],
    default: [],
  },
  services: {
    type: Schema.Types.Mixed,
    default: {},
  },
});

export const Client = model<ClientType>("Client", clientSchema);
