import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
