import type { Metadata } from "next";
import { Ubuntu, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";
import "./styles/globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <ThemeProvider>
        <body
          className={`${ubuntu.variable} ${ibmplex.className} dark:bg-black bg-white`}
        >
          <main>
            <Navbar />
            <IconNav />
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
