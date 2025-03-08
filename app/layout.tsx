import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from './components/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-playfair-display' });

export const metadata: Metadata = {
  title: 'Проект Икс | Бицепс и кофе',
  description: 'Уютная кофейня и пекарня с быстрым обслуживанием. Свежая выпечка и кофе на вынос.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative">
        <Navigation />
        <main>
          {children}
        </main>

        <footer className="bg-mocha-darker text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4 text-mocha-lighter">Проект Икс</h3>
                <p className="text-2xl text-mocha-accent font-serif">Бицепс и кофе 💪 ☕️</p>
                <div className="mt-4">
                  <p className="text-mocha-lighter">Среднее время ожидания:</p>
                  <p className="text-mocha-lighter">3-5 минут</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4 text-mocha-lighter">Контакты</h4>
                <p className="text-mocha-lighter">Телефон для заказа:</p>
                <p className="text-mocha-lighter">+7 (989) 289-47-77</p>
                <p className="text-mocha-lighter mt-2">Email:</p>
                <p className="text-mocha-lighter">zelenskiy.ivan@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4 text-mocha-lighter">Режим работы</h4>
                <p className="text-mocha-lighter">Пн-Пт: 7:30 - 22:30</p>
                <p className="text-mocha-lighter">Сб-Вс: 9:00 - 22:00</p>
                <p className="text-mocha-lighter mt-2">Предзаказ выпечки:</p>
                <p className="text-mocha-lighter">за 2 часа</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-mocha-light/20 text-center text-mocha-lighter">
              <p>&copy; 2025 Проект Икс. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 