'use server';
import mail from '@sendgrid/mail';
import {SERVER_CONFIG} from "~/utils/config.server";


mail.setApiKey(SERVER_CONFIG.SENDGRID.API_KEY);


interface IProps {
    subject: string;
    message: string;
    html: string;
    to: string;
    replyTo: string;
    from?: string | undefined;
}

const send = async (props: IProps) => {
    try{
        const data = {
            to: props.to,
            from: (props.from || SERVER_CONFIG.SENDGRID.SITE_EMAIL) as string,
            replyTo: props.replyTo,
            subject: props.subject,
            text: props.message,
            html: props.html
        }
        const result = await mail.send(data);
        return {
            status: 'success',
            message: 'Successfully sent email.'
        }
    }
    catch(e){
        console.error("send email error", e);
        throw new Error('Error when sending email');
    }
}

export {
    send
}