import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex-auto w-full h-full">
            <div className="overlay backdrop-blur"></div>
            <Nav />
            <div className="">{children}</div>
            <Footer />
          </main>
        </body>
    </html>
  );
}