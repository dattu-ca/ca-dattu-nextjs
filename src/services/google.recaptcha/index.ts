'use server';

import axios from "axios"
import {GOOGLE_RECAPTCHA} from "~/utils/constants.server";

export async function verifyCaptcha(token: string | null) {
    const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA.SECRET_KEY}&response=${token}`
    )
    console.log('res.data', res)
    if (res.data.success) {
        return "success!"
    } else {
        throw new Error("Failed Captcha")
    }
}