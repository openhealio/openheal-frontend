import Blockchain from './Blockchain'
import Block from './Block'

export default class Patient {
    id: string
    name: string
    blockchain: Blockchain

    constructor(id, name) {
        this.id = id
        this.name = name

        this.blockchain= new Blockchain()

    }


    toString(){

        const patientBlockChain = this.blockchain.chain.map(block => block.toString())
        
        return `Patient - 
        Patient Name: ${this.name}
        Patient Id: ${this.id}
        Patient Blockchain: ${patientBlockChain}`
    }
}