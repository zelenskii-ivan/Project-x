'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Затемнение фона */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Панель корзины */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Заголовок */}
              <div className="p-4 border-b border-mocha-light flex justify-between items-center">
                <h2 className="text-2xl font-serif text-mocha-darker">
                  Корзина ({totalItems})
                </h2>
                <button
                  onClick={onClose}
                  className="text-mocha-dark hover:text-mocha-darker"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Содержимое корзины */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-mocha-dark mb-4">Ваша корзина пуста</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="text-mocha-warm hover:text-mocha-dark"
                    >
                      Перейти к меню
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center justify-between p-4 bg-mocha-lightest rounded-lg"
                      >
                        <div>
                          <h3 className="text-mocha-darker font-medium">
                            {item.name}
                          </h3>
                          <p className="text-mocha-dark text-sm">
                            {item.price} ₽ × {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-mocha-dark hover:text-mocha-darker"
                          >
                            -
                          </button>
                          <span className="text-mocha-darker">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-mocha-dark hover:text-mocha-darker"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Итого и кнопка оформления заказа */}
              {items.length > 0 && (
                <div className="p-4 border-t border-mocha-light">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-mocha-darker font-medium">Итого:</span>
                    <span className="text-xl font-serif text-mocha-darker">
                      {totalPrice} ₽
                    </span>
                  </div>
                  <Link href="/order" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                      Оформить заказ
                    </motion.button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 