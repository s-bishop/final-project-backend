import express from 'express';
import { getClient } from '../db';
// import { ObjectId } from 'mongodb';
import Notes from '../models/MedJournal';
import Appointments from "../models/MedJournal";

const routes = express.Router();

routes.get("/medjournal", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection("shoutouts")
            .find().toArray();
        res.json(results); // send JSON results
    } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default routes;