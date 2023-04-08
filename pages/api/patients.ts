import { NextApiRequest, NextApiResponse } from "next";
import patients from "lib/db";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET') {
        return res.status(400).json({ message: 'Something went wrong' })
    }

    res.status(200).json(patients.getPatients())
}