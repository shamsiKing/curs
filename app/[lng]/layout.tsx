import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import { ChildProps } from "@/type";
import ClerkThemeProvider from "@/components/providers/clerkTheme-provider";

const geistSans = Geist({
  weight: ["300", "400", "500", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SpaceGrotesk = Space_Grotesk({
  weight: ["500", "600"],
  variable: "--font-spaceGrotesk-mono",
  subsets: ["latin"],
});

interface Props extends ChildProps {
  params: { lng: string };
}

export const metadata: Metadata = {
  title: "Pepsi way",
  description: "Randomni icon tanladim",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang="en" dir={dir(lng)} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${SpaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkThemeProvider lng={lng}>{children}</ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
