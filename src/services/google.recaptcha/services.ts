'use server';

import axios from "axios"
import {SERVER_CONFIG} from "~/utils/config.server";

export const  verifyCaptcha = async (token: string | null) => {
    const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SERVER_CONFIG.GOOGLE_RECAPTCHA.SECRET_KEY}&response=${token}`
    )
    if (res.data.success) {
        return "success!"
    } else {
        throw new Error("Failed Captcha")
    }
}