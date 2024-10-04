import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "lily choi dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: "Uiyeun, sans-serif" }}>{children}</body>
    </html>
  );
}
