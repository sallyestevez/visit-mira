import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Visit Mira",
  description: "We're stuck on a different planet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-platinum text-navy-black antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
