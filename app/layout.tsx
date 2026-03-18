import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undangan Pernikahan - Ahmad & Fatimah",
  description: "Kami mengundang Anda untuk hadir di hari bahagia kami",
  openGraph: {
    title: "Undangan Pernikahan - Ahmad & Fatimah",
    description: "Kami mengundang Anda untuk hadir di hari bahagia kami",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
