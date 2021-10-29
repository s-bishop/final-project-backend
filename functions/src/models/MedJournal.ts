import { ObjectId } from "mongodb";

export default interface Notes {
    _id?: ObjectId,
    title: string,
    notes: string,
}

export default interface Appointments {
    _id?: ObjectId,
    date: string,
    time:string,
    doctor: string,
    reason: string,
    questions:string
}