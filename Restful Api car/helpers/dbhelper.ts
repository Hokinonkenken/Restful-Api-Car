import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

export const insertOne = async (dbCollection, document) => {
  const client = new MongoClient();
  await client.connect("mongodb+srv://[mongo url]?authMechanism=SCRAM-SHA-1");  
  const db = client.database("carstore");
  const co = db.collection(dbCollection);
  const insertId = await co.insertOne(document);
  return insertId;
  
}

export const find = async (dbCollection, document) => {
  const client = new MongoClient();
  try{
    await client.connect("mongodb+srv://[mongo url]?authMechanism=SCRAM-SHA-1")
    const db = client.database("carstore");
    const co = db.collection(dbCollection);
    const values = await co.find(document).toArray();
    return values;
  } catch(err) {
    return err
  }
}

