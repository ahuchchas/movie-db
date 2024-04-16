import { Sora } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "MovieDB",
  description: "A site to show list of movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.className} dark:bg-body bg-white font-[Sora] dark:text-white text-dark`}
      >
        <Navbar />
        {children}

        <div id="modal-root"></div>
      </body>
    </html>
  );
}
