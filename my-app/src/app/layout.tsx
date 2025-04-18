import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from "@clerk/nextjs";
import ConvexClientProvider from "@/components/convexClientProvider";
import Footer from "@/components/provider/footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codezy",
  description: "A great Code editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
      >
          <header className="p-4 flex justify-end">
            
          </header>
      <ConvexClientProvider>{children}</ConvexClientProvider>
      <Footer/>
      <Toaster/>
      
      </body>
    </html>
    </ClerkProvider>
  );
}
