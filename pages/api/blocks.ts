import { NextApiResponse, NextApiRequest } from "next"
import {blockchain} from "lib/db"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    if (req.method === 'GET') {
        res.status(200).json(blockchain.chain)
    }
    else {
        res.status(400).json({ message: 'Must be a GET request' })
    }
}
