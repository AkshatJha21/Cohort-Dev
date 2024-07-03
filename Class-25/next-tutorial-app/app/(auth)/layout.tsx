import React from "react";

export default function({ children }: { children: React.ReactNode}) {
    return (
        <>
            <div className="p-1 border-b bg-neutral-100 text-center">
                20% off for the next 24 hours!
            </div>
            {children}
        </>
    )
}