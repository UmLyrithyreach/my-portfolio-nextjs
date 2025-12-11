import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Reach - Web Developer Portfolio",
  description: "I'm Reach, an aspiring web developer with a strong foundation in the MERN stack. I develop responsive and interactive websites that are coherent to your needs.",
  keywords: ["Reach", "Web Developer", "MERN Stack", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Reach" }],
  creator: "Reach",
  openGraph: {
    title: "Reach - Web Developer Portfolio",
    description: "I'm Reach, an aspiring web developer with a strong foundation in the MERN stack.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reach - Web Developer Portfolio",
    description: "I'm Reach, an aspiring web developer with a strong foundation in the MERN stack.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/next.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
