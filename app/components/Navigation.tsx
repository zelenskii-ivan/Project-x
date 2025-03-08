'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
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
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="text-2xl font-serif text-mocha-darker hover:scale-105 transition-transform"
          >
            Проект Икс
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-mocha-dark hover:text-mocha-warm hover:scale-105 transition-all"
            >
              Меню
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-mocha-dark hover:text-mocha-warm hover:scale-105 transition-all"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection('preorder')}
              className="text-mocha-dark hover:text-mocha-warm hover:scale-105 transition-all"
            >
              Предзаказ
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-mocha-dark hover:text-mocha-warm hover:scale-105 transition-all"
            >
              Где нас найти
            </button>
            <button
              className="bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Заказать онлайн
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-mocha-darker hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

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
              <button
                className="w-full bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Заказать онлайн
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 