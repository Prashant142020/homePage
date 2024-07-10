// components/Layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/common/theme-provider";
import NavBar from "@/components/nav/navbar";
import Sidebar from "@/components/common/sidebar";
import Card from "@/components/common/followCard";

import "./globals.css";
import Fotter from "@/components/common/fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manu K. Gupta", 
  description:
    "I am an assistant professor in Management Studies at IIT Roorkee.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <div className="mx-4 mt-6 flex gap-8 md:mx-16">
              <Sidebar />
              <div className="w-full md:w-3/4">
                <Card />
                <div className="flex-1">{children}</div>
              </div>
            </div>
            <Fotter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
