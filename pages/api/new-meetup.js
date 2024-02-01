import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            const { title, image, address, description } = data;

            // Connect to MongoDB
            const client = await MongoClient.connect('mongodb+srv://roshgupta17:Anika123456@cluster0.dlnrdlu.mongodb.net/meetups?retryWrites=true&w=majority');
            const db = client.db();
            const meetupsCollection = db.collection('meetups');

            // Insert meetup data into the collection
            const result = await meetupsCollection.insertOne(data);

            console.log(result);

            // Close the MongoDB connection
            client.close();

            // Send a success response
            res.status(201).json({ message: "Meetup started" });
        } catch (error) {
            // Handle any errors that occur during the try block
            console.error("Error:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

export default handler;
