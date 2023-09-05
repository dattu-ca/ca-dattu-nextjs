'use client';
import {useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha"
import {IBodyFormFieldRecaptcha, TBodyFormField} from "~/models/bodyForm";
import {CONSTANTS} from "~/utils/constants";
import {verifyCaptcha} from "~/services";

interface IProps {
    field: TBodyFormField
}

const FieldTypeRecaptcha = ({field: propField}: IProps) => {
    const field = propField as IBodyFormFieldRecaptcha;
    
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [isVerified, setIsVerified] = useState<boolean>(false)

    async function handleCaptchaSubmission(token: string | null) {
        console.log("token", token)
        // Server function to verify captcha
        // await verifyCaptcha(token)
        //     .then(() => setIsVerified(true))
        //     .catch(() => setIsVerified(false))
    }

    return (
        <>
            <ReCAPTCHA
                sitekey={CONSTANTS.GOOGLE_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
            />
        </>
    )
}

export {
    FieldTypeRecaptcha
}