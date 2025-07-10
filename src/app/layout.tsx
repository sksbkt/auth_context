import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "سیستم احراز هویت",
  description: "سیستم احراز هویت از طریق شماره تلفن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
