import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import FloatingContactWidget from "@/components/FloatingContactWidget";

// Primary font: Montserrat (headers, brand)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Secondary font: DM Sans (body, content)
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency - Premium Solutions",
  description: "Transform your brand with our premium digital marketing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} ${dmSans.variable} antialiased`}>
        {children}
        <FloatingContactWidget />
      </body>
    </html>
  );
}
