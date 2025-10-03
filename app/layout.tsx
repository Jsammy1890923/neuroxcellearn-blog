import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NeuroXcel Learn | Tools & Strategies for Neurodivergent Learners",
  description: "Educational resources, tools, and strategies designed for neurodivergent learners. Part of NeuroXcel Publishing House.",
  keywords: ["neurodivergent", "learning", "education", "ADHD", "autism", "dyslexia", "tools", "strategies"],
  authors: [{ name: "NeuroXcel Publishing House" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuroxcellearn.com",
    siteName: "NeuroXcel Learn",
    title: "NeuroXcel Learn | Tools & Strategies for Neurodivergent Learners",
    description: "Educational resources, tools, and strategies designed for neurodivergent learners.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroXcel Learn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroXcel Learn | Tools & Strategies for Neurodivergent Learners",
    description: "Educational resources, tools, and strategies designed for neurodivergent learners.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
