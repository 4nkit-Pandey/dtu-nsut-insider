import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The DTU-NSUT Insider | From JAC rank to college life to your first job",
  description:
    "Real talk. Real seniors. Real opportunities. The insider ecosystem for DTU and NSUT students — JAC counselling, branch selection, placements, internships, and campus life truth.",
  keywords: [
    "DTU insider",
    "NSUT insider",
    "JAC counselling",
    "DTU placements",
    "NSUT placements",
    "DTU NSUT branch selection",
    "DTU internships",
    "engineering college guide India",
  ],
  openGraph: {
    title: "The DTU-NSUT Insider",
    description: "Everything they don't tell you about DTU & NSUT.",
    type: "website",
    siteName: "The DTU-NSUT Insider",
  },
  twitter: {
    card: "summary_large_image",
    title: "The DTU-NSUT Insider",
    description: "Real talk. Real seniors. Real opportunities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
