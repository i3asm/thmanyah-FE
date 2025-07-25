import type {Metadata} from "next";
import "./globals.css";
import SideBar from "@/components/sideBar/SideBar";

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
      <div className="grid grid-cols-[220px_1fr] p-6 min-h-screen">

        <SideBar></SideBar>

        {children}

      </div>
      </body>
      </html>
  );
}
