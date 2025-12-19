'use client';

import "./globals.css";
import StoreProvider from "./components/providers/StoreProvider";
import { UIProvider } from "./context/UIContext";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { cn } from "./lib/utils";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Next Gen 4 Kids</title>
        <meta name="description" content="A premium digital experience for kids." />
      </head>
      <body
        className={cn(
          "antialiased selection:bg-highlight/10 bg-white"
        )}
      >
        <StoreProvider>
          <UIProvider>
            <LoadingScreen />
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </UIProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
