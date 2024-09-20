import type { Metadata } from "next";
import { Inter, Irish_Grover } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";  
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const irishGrover = Irish_Grover({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='min-h-screen relative flex flex-col bg-black'>
                <Header/>
                <div className='min-h-full lg:mt-16'>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
