import type { Metadata } from "next";
import { inter, ibm_plex_mono } from "@/public/fonts/fonts";
import "./globals.css";

import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/app/components/header"

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "My Personal Portfolio",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={ibm_plex_mono.className}>
                <StyledComponentsRegistry>
                    <Header/>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
