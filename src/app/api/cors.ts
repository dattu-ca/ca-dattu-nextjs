import {NextApiRequest, NextApiResponse} from "next";
import NextCors from "nextjs-cors";

export const AllowCORS = async (req: NextApiRequest, res: NextApiResponse) => {
    const origin = (process.env.ALLOW_CORS as string).split(";");
    await NextCors(req, res, {
        methods: ["GET"],
        origin: "*",
        optionsSuccessStatus: 200
    });
};