'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useCart } from '../contexts/CartContext';
import Cart from './Cart';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data: session } = useSession();
  const { totalItems } = useCart();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64; // высота навигации
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-serif text-mocha-darker">
              Portal X
            </Link>

            <div className="flex items-center space-x-4">
              <Link 
                href="/order"
                className="text-mocha-dark hover:text-mocha-warm transition-colors"
              >
                Заказать
              </Link>
              
              {session ? (
                <>
                  <Link 
                    href="/profile"
                    className="text-mocha-dark hover:text-mocha-warm transition-colors"
                  >
                    Профиль
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-mocha-dark hover:text-mocha-warm transition-colors"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <Link 
                  href="/login"
                  className="text-mocha-dark hover:text-mocha-warm transition-colors"
                >
                  Войти
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left text-mocha-dark hover:text-mocha-warm py-2 transition-colors"
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-mocha-dark hover:text-mocha-warm py-2 transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('preorder')}
                className="block w-full text-left text-mocha-dark hover:text-mocha-warm py-2 transition-colors"
              >
                Предзаказ
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="block w-full text-left text-mocha-dark hover:text-mocha-warm py-2 transition-colors"
              >
                Где нас найти
              </button>

              {/* Кнопка корзины в мобильном меню */}
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between w-full text-left text-mocha-dark hover:text-mocha-warm py-2 transition-colors"
              >
                <span>Корзина</span>
                {totalItems > 0 && (
                  <span className="bg-mocha-warm text-white text-xs px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>

              {session ? (
                <>
                  <Link href="/profile">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full text-left text-mocha-dark hover:text-mocha-warm py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Профиль
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300"
                  >
                    Выйти
                  </motion.button>
                </>
              ) : (
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Войти
                  </motion.button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Компонент корзины */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
} 