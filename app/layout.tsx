import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import {
  faB,
  faCheckSquare,
  faCoffee,
  faDatabase,
  faHouseLaptop,
  faS,
  faWindowMaximize,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Victor's Portfolio",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${syne.className} scroll-smooth`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
