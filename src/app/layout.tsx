import "./globals.css";
import type { Metadata } from "next";
import { Kanit, Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext", "thai"],
});

export const metadata: Metadata = {
  title: "Fund Oral Report",
  description: "Fund Oral Report",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansThai.className}>{children}</body>
    </html>
  );
}
