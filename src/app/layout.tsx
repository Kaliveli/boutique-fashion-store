import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Boutique Fashion - Plus Size, Ethnic & Minimalist Clothing",
  description: "Discover beautiful plus-size fashion, ethnic wear, and minimalist styles. Empowering women of all sizes with comfortable, stylish clothing. Free shipping on orders over $100.",
  keywords: "plus size fashion, ethnic wear, minimalist clothing, women's fashion, boutique, stylish clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}