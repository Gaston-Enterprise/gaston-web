import { NextApiRequest, NextApiResponse } from "next";
import dbClient from "../db/connection.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { clientName } = req.query;
    console.log("Req.query: ", clientName);
    

    if (!clientName) {
      return res.status(400).json({ message: "Missing CLient Name" });
    }

    try {
      await dbClient.connect().then(console.log("Connected to the db"));
      const db = dbClient.db("Gaston");
      const clientCollection = db.collection("Clients");
      console.log("Found collection");
      
      const clientData = clientCollection.find({ client_name: clientName });

      console.log("client data: ", clientData);

      if (!clientData) {
        return res.status(404).json({ message: "Client not Found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      dbClient.close();
    }
  }
}
