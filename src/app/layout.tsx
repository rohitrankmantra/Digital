import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import FloatingContactWidget from "@/components/FloatingContactWidget";

// Primary font: Montserrat (headers, brand)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Secondary font: Poppins (body, content)
const poppins = Poppins({
  variable: "--font-poppins",
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
      <body className={`${montserrat.variable} ${poppins.variable} antialiased`}>
        {children}
        <FloatingContactWidget />
      </body>
    </html>
  );
}
