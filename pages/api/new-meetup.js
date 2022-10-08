//api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://vishnuvp:wcCnquyZLSkti2el@cluster0.ix9ndo7.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "meetups instered successfully", result });
  }
};

export default handler;
