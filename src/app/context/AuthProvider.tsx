'use client';

import { SessionProvider } from "next-auth/react"
import React from "react";

interface IProps {
    children: React.ReactNode
}
const AuthProvider = ({children} : IProps) =>{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export {
    AuthProvider
}