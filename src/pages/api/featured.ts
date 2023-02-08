import { promises as fs } from "fs"
import path from "path"
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

type FilenameArray = {
    directory: string
    filenames: Awaited<ReturnType<NextApiHandler>>
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<FilenameArray>) => {
    const sendError = (err: NodeJS.ErrnoException | null) => {
        console.log(err)
    }
    const imageDirectory = path.join(process.cwd(), "/public/mindset")
    const imageFilenames = await fs.readdir(imageDirectory)
    console.log(imageFilenames)
    res.send({ directory: imageDirectory, filenames: imageFilenames })
}

export default handler
