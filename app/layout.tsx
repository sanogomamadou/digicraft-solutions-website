import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design. Data. Digital. Done Right.",
  description: "DigiCraft — à la croisée du design créatif, de la data intelligente et du code efficace. Pour les marques qui veulent marquer.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider></body>
    </html>
  );
}
