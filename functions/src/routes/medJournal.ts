import express from 'express';
import { getClient } from '../db';
// import { ObjectId } from 'mongodb';
import Notes from '../models/MedJournal';
import Appointments from "../models/MedJournal";

const routes = express.Router();


//this is the backend side that is collecting from our database!
//
routes.get("/medjournal", async (req, res) => {
    try {
        const client = await getClient();
        const apptResults = await client
        .db()
        .collection<Appointments>("appointments")
        .find()
        .toArray();
        res.json(apptResults); // send JSON results
        } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

routes.post("/medjournal", async (req, res) => {
    try {
        const appointment = req.body as Appointments
        const client = await getClient();
        await client
        .db()
        .collection<Appointments>("appointments")
        .insertOne(appointment)
        res.status(201).json(appointment); // send JSON results
        } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

routes.get("/mednotes", async (req, res) => {
    try {
        const client = await getClient();
        const notesResults = await client
        .db()
        .collection<Notes>("notes")
        .find()
        .toArray();
        res.json(notesResults); // send JSON results
    } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

routes.post("/mednotes", async (req, res) => {
    try {
        const notes = req.body as Notes
        const client = await getClient();
        await client
        .db()
        .collection<Notes>("notes")
        .insertOne(notes)
        res.status(201).json(notes); // send JSON results
        } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default routes;