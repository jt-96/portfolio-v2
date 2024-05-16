import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const font = Quicksand({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to my Portfolio!",
  description: "Portfolio V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
