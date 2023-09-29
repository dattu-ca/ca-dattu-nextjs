'use server';
import {BodyForm} from "~/models";
import {client} from "../client";
import {BodyFormSkeleton, mapContentful} from '../schema/bodyForm.schema'

const FIELDS = {
    NAME: 'fields.name',
    FORM_ID: 'fields.formId',
    FORM_MODEL: 'fields.formModel',
    SUBMIT_FORM_ENABLED: 'fields.submitFormEnabled',
    RECAPTCHA_ENABLED: 'fields.recaptchaEnabled',
    SEND_EMAIL_ENABLED: 'fields.sendEmailEnabled',
    SUCCESS_MESSAGE: 'fields.successMessage',
    FAILURE_MESSAGE: 'fields.failureMessage',
    FROM_EMAIL_KEY: 'fields.fromEmailKey',
}

const content_type = 'bodyForm';

const fetchByFormId = (formId: string) =>
    client
        .getEntries<BodyFormSkeleton>({
            content_type,
            select: [
                FIELDS.NAME as 'fields',
                FIELDS.FORM_ID as 'fields',
                FIELDS.FORM_MODEL as 'fields',
                FIELDS.SUBMIT_FORM_ENABLED as 'fields',
                FIELDS.RECAPTCHA_ENABLED as 'fields',
                FIELDS.SEND_EMAIL_ENABLED as 'fields',
                FIELDS.SUCCESS_MESSAGE as 'fields',
                FIELDS.FAILURE_MESSAGE as 'fields',
                FIELDS.FROM_EMAIL_KEY as 'fields',
            ],
            [FIELDS.FORM_ID]: formId,
            include: 10,
        })
        .then((response) => {
            if (response.items.length === 1) {
                const item = response.items[0];
                return mapContentful(item) as BodyForm;
            } else if (response.items.length > 1) {
                throw new Error(`Found multiple content for [formId]=${formId}`)
            }
            throw new Error(`Cannot find content for [formId]=${formId}`)
        });


export {
    fetchByFormId
}