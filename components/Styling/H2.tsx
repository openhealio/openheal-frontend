import React from "react";

interface Props {
    children: React.ReactNode
    className?: string
}

export default function H2({ className, children }:Props) {
    return (
        <h2 className={`px-4 lg:px-80 font-charter text-4xl text-start  text-black ${className}`}>
            {children}
        </h2>)
}