import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "@/app/context/ToasterContext";
import AuthContext from "@/app/context/AuthContext";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messager Clone",
  description: "Messager Clone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
