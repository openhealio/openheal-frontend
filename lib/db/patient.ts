import Patients from 'classes/blockchain/Patients'

export default class Patient {
    patients: Patients
    constructor() {
        this.patients = new Patients()
    }
    async getPatient(id: string) {
        return await this.patients.getPatient(id)
    }
    async getPatients() {
        return await this.patients.getPatients()
    }
    async addPatient(patient: Record<string, string | number | boolean>) {
        console.log(patient)
    }
}
