import { NextApiRequest, NextApiResponse } from 'next'
import Patient from 'lib/db/patient'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(400).json({ message: 'Something went wrong' })
    }

    const service = new Patient()

    res.status(200).json(await service.getPatients())
}
