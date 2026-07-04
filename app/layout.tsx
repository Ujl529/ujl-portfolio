import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import AnimatedFooter from "@/components/AnimatedFooter";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import FAB from "@/components/FAB";
import PageTransition from "@/components/PageTransition";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ujjwal Dwivedi | Enterprise AI Engineer & Solution Architect",
  description:
    "Portfolio of Ujjwal Dwivedi - AI Engineer, Enterprise Solution Developer, and Future SaaS Entrepreneur. Building AI solutions for modern enterprises.",
  keywords: [
    "AI Engineer",
    "Enterprise AI",
    "Predictive Maintenance",
    "Machine Learning",
    "Deep Learning",
    "Ujjwal Dwivedi",
    "Portfolio",
    "SaaS",
    "Industrial AI",
  ],
  authors: [{ name: "Ujjwal Dwivedi" }],
  creator: "Ujjwal Dwivedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ujjwaldwivedi.com",
    title: "Ujjwal Dwivedi | Enterprise AI Engineer & Solution Architect",
    description:
      "Building AI solutions for modern enterprises. Predictive Maintenance, Industrial IoT, and Scalable AI Architectures.",
    siteName: "Ujjwal Dwivedi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Dwivedi | Enterprise AI Engineer",
    description:
      "Building AI solutions for modern enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <CustomCursor />
          <ParticleBackground />
          <SmoothScroll>
            <Navbar />
            <PageTransition>
              <main className="min-h-screen relative">{children}</main>
            </PageTransition>
            <FAB />
            <AnimatedFooter />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
