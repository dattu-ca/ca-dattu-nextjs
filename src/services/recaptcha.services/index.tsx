// "use server"

import axios from "axios"

async function verifyCaptcha(token: string | null) {
    console.log('token', token);
    console.log('process.env', process.env)
    const res = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${token}`
    )
    if (res.data.success) {
        return "success!"
    } else {
        throw new Error("Failed Captcha")
    }
}

export { verifyCaptcha }