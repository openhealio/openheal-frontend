import { NextApiRequest, NextApiResponse } from "next";
import patients from "lib/db";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Something went wrong' })

    }

    const patient = patients.addPatient({ name: req.body.name })
    console.log(`New Patient added: ${patient.toString()}`)
    res.end()
    // res.status(200).redirect('/api/patients')

}