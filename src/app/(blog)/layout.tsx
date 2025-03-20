// src/app/(blog)/layout.tsx

import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-[#FCFCF7] h-screen w-screen pr-[9.75rem] pl-[7.25rem] pt-[3.75rem] pb-10 overflow-hidden">
            {children}
            <SanityLive />
            {(await draftMode()).isEnabled && (
                <>
                    <DisableDraftMode />
                    <VisualEditing />
                </>
            )}
        </div>
    );
}