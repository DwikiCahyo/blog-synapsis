import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import QueryProvider from "./utils/QueryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Simpleblog",
  description: "Blog for synapsis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <QueryProvider>
          <Navbar />
          <section className="mx-2 md:mx-10 my-20 md:my-20">
            <div className="w-full">{children}</div>
          </section>
        </QueryProvider>
        <ToastContainer autoClose={5000} closeOnClick />
      </body>
    </html>
  );
}
