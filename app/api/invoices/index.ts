import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

type Invoice = {
  customer: string;
  amount: number;
  date: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("chathuraka_db");

  if (req.method === "GET") {
    const data = await db.collection<Invoice>("chathuraka_db").find().toArray();
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { customer, amount, date } = req.body;
    const newInvoice: Invoice = { customer, amount, date };
    const result = await db.collection("chathuraka_db").insertOne(newInvoice);
    return res.status(201).json(result);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}