import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/footer";

export const metadata: Metadata = {
  title: "Landing Sport - Agence Marketing Digital Sportif",
  description: "Agence spécialisée en marketing digital et développement web pour le secteur sportif",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <FooterSection />
      </body>
    </html>
  );
}
