import type { Metadata } from "next";
import { Inter, Ubuntu, IBM_Plex_Mono } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "@/context/themeContext";

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

const inter = Inter({ subsets: ["latin"] });

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
    <ThemeProvider>
      <html lang="en">
        <body className={`${ubuntu.variable} ${ibmplex.className}`}>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
