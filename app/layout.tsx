import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import 'mapbox-gl/dist/mapbox-gl.css';

const heebo = Heebo({
  subsets: ['hebrew'],
  variable: '--font-heebo',
});

const hebrew = Heebo({
  subsets: ['hebrew'],
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: "שלא נצא בורים",
  description: "פרויקט הנצחה לזכרו של סרן אמיר צור",
  icons: {
    icon: [
      {
        url: '/Amir-Favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/Amir-Favicon.svg',
    apple: '/Amir-Favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${hebrew.variable} font-heebo antialiased flex items-center justify-center bg-[#fcfcf7]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
