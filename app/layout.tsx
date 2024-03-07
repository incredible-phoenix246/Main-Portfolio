import type { Metadata } from "next";
import { Ubuntu, IBM_Plex_Mono } from "next/font/google";
import "./styles/globals.scss";
import IconNav from "@/components/IconNav";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const ibmplex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Phoenix",
  description: "My mian portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${ibmplex.className}  bg-AAprimary`}>
        <IconNav />
        {children}
      </body>
    </html>
  );
}
