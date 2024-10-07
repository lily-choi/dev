import type { Metadata } from "next";
import "./globals.css";
import Header from "./_layouts/Header";
import Footer from "./_layouts/Footer";

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
      <body style={{ fontFamily: "Uiyeun, sans-serif" }}>
        <Header />
        <main className="px-[5%] md:px-[10%]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
