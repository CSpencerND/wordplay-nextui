import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

type Data = {
    message: string
}

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ message: "Hello, NextJS!" })
}

export default handler
