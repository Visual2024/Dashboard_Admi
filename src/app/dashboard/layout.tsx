import type { Metadata } from "next";
import '../globals.css'


export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard Gestion Finaciero",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="m-0" >
                {children}
            </body>
        </html>
    );
}


