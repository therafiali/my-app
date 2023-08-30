import Wrapper from "@/components/shared/Wrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import Navbar from "@/components/views/Navbar/Navbar";
import TopLabel from "./TopLabel";

const inter = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900", "600", "900"],
});

export const metadata: Metadata = {
  title: "Full Stack Ecommerce Web App",
  description: "Generated by Full Stack Ecommerce Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <TopLabel/>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
