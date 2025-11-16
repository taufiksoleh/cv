import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taufik Soleh - Full Stack Developer",
  description: "Interactive 3D portfolio showcasing my work and experience in web development",
  keywords: ["web developer", "portfolio", "3D website", "React", "Next.js", "Three.js"],
  authors: [{ name: "Taufik Soleh" }],
  openGraph: {
    title: "Taufik Soleh - Full Stack Developer",
    description: "Interactive 3D portfolio showcasing my work and experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
