import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.scss";
import Appbar from "@/components/shared/Appbar";
import Footer from "@/components/shared/Footer";
import LenisProvider from "@/components/shared/LenisProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  display: "swap",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={`${lato.variable} ${montserrat.className} antialiased`}>
        <LenisProvider>
          <Appbar />

          {children}

          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
