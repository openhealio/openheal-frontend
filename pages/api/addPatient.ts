import { NextApiRequest, NextApiResponse } from "next";
import Patient from "lib/db/patient";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Something went wrong' })

    }

    const service = new Patient()

    const patient = service.addPatient({ name: req.body.name })
    console.log(`New Patient added: ${patient.toString()}`)
    res.end()
    // res.status(200).redirect('/api/patients')

}