'use client';
import {ErrorPageComponent} from "~/app.components/errorComponents/error";

export default function Error({error, reset}) {
    return <ErrorPageComponent error={error} reset={reset}/>
}