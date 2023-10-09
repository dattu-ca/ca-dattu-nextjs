import {NextApiRequest, NextApiResponse} from "next";
import NextCors from "nextjs-cors";
import {SERVER_CONFIG} from "~/utils/config.server";

export const AllowCORS = async (req: NextApiRequest, res: NextApiResponse) => {
    const origin = SERVER_CONFIG.CORS.ALLOW_CORS;
    await NextCors(req, res, {
        methods: ["GET"],
        origin: "*",
        optionsSuccessStatus: 200
    });
};