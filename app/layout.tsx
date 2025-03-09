import Navigation from './components/Navigation';
import { CartProvider } from './contexts/CartContext';
import './globals.css';
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal X",
  description: "Your coffee shop portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextAuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
} 