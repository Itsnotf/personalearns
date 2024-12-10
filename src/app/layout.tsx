import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Personal Learns",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-poppins overflow-x-hidden`}
      >
        <Navbar />
        <div className="pt-16 overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
