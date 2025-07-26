import type {Metadata} from "next";
import "./globals.css";
import SideBar from "@/components/sideBar/SideBar";
import SearchBar from "@/components/SearchBar/SearchBar";
import Footer from "@/components/footer/Footer";
import {Suspense} from "react";

export const metadata: Metadata = {
  title: "podcast App",
  description: "For thmanyah assignment",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <div className="grid md:grid-cols-[225px_1fr] min-h-screen items-start">

        <div className="sticky top-0 h-screen hidden md:block">
          <SideBar></SideBar>
        </div>

        <div className="min-h-screen md:max-w-[calc(100vw-225px)] max-w-screen">
          <div className="">
            <Suspense fallback={null}>
              <SearchBar></SearchBar>
            </Suspense>
          </div>
          <main className="">
            {children}
            <div className="md:hidden text-center">
              <Footer></Footer>
            </div>
          </main>
        </div>

      </div>
      </body>
      </html>
  );
}
