import { NextApiRequest, NextApiResponse } from 'next'
import { blockchain } from 'lib/db/blockchain'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const block = blockchain.addBlock(req.body.data)
        console.log(`New Block added: ${block.toString()}`)

        //res.json(block)
        res.redirect('/blocks')
    } else {
        res.status(400).json({ message: 'Something went wrong' })
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '100mb',
        },
    },
}
