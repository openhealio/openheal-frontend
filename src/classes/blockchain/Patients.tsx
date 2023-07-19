import Patient from "./Patient";
import { randomUUID } from "crypto";

interface IPatient {
  name: string;
}

export default class Patients {
  patients: Patient[] = [];

  addPatient(patient: IPatient) {
    const item = new Patient(randomUUID(), patient.name);
    this.patients.push(item);
    return item;
  }

  getPatient(id) {
    return this.patients.find((patient) => patient.id === id);
  }

  getPatients() {
    return this.patients;
  }

  toString() {
    return `Patients - 
        Patients: ${this.patients.map((patient) => patient.toString())}`;
  }
}
