import { NextApiResponse, NextApiRequest } from "next";
import Patient from "lib/db/patient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Something went wrong" });
  }

  const id = req.body.id;

  const patients = new Patient();
  if (patients.patients.patients.length === 0) {
    return res.status(400).json({ message: "No patients found" });
  }

  const patient = patients.getPatient(id);
  console.log(patient.toString());
  res.json({ patient: patient.toString() });
  //return res.json({patient: patient.toString()})
}
