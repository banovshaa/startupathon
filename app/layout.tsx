import type { Metadata } from "next";
import { Open_Sans, Montserrat, Space_Grotesk } from "next/font/google";
import "@/assets/css/global.scss";
import Header from "@/components/shared/Header/Header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Startupathon | Persist Ventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${spaceGrotesk.variable}`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
