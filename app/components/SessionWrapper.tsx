"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

export default function SessionWrapper({children}: AuthProviderProps){
    return <SessionProvider>{children}</SessionProvider>
}