'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: number;
  category: 'coffee' | 'bakery' | 'dessert';
}

interface OrderItem {
  product: Product;
  quantity: number;
}

const PRODUCTS: Product[] = [
  { id: 'cappuccino', name: 'Капучино', price: 190, category: 'coffee' },
  { id: 'latte', name: 'Латте', price: 190, category: 'coffee' },
  { id: 'americano', name: 'Американо', price: 150, category: 'coffee' },
  { id: 'strudel', name: 'Штрудель с вишней', price: 85, category: 'bakery' },
  { id: 'potato-pie', name: 'Пирожок с картошкой', price: 60, category: 'bakery' },
  { id: 'khachapuri', name: 'Хачапури с сыром', price: 90, category: 'bakery' },
];

export default function OrderForm() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [pickupTime, setPickupTime] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const addToOrder = (product: Product) => {
    setOrderItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromOrder = (productId: string) => {
    setOrderItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setOrderItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return orderItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет интеграция с платежной системой
    console.log('Order submitted:', { orderItems, pickupTime, contactInfo });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Выбор продуктов */}
        <div>
          <h3 className="text-2xl font-serif text-mocha-darker mb-4">Выберите продукты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS.map(product => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h4 className="font-serif text-lg text-mocha-darker">{product.name}</h4>
                <p className="text-mocha-dark">{product.price} ₽</p>
                <button
                  type="button"
                  onClick={() => addToOrder(product)}
                  className="mt-2 bg-mocha-warm hover:bg-mocha-dark text-white px-4 py-2 rounded-full text-sm transition duration-300"
                >
                  Добавить
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Корзина */}
        {orderItems.length > 0 && (
          <div className="bg-mocha-lightest p-6 rounded-lg">
            <h3 className="text-2xl font-serif text-mocha-darker mb-4">Ваш заказ</h3>
            <div className="space-y-4">
              {orderItems.map(item => (
                <div key={item.product.id} className="flex items-center justify-between">
                  <span className="text-mocha-darker">{item.product.name}</span>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="text-mocha-dark hover:text-mocha-darker"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="text-mocha-dark hover:text-mocha-darker"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromOrder(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-xl font-serif text-mocha-darker pt-4 border-t border-mocha-light">
                Итого: {calculateTotal()} ₽
              </div>
            </div>
          </div>
        )}

        {/* Время получения */}
        <div>
          <h3 className="text-2xl font-serif text-mocha-darker mb-4">Время получения</h3>
          <input
            type="datetime-local"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="w-full p-2 border border-mocha-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mocha-warm"
            required
          />
        </div>

        {/* Контактная информация */}
        <div>
          <h3 className="text-2xl font-serif text-mocha-darker mb-4">Контактные данные</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              value={contactInfo.name}
              onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full p-2 border border-mocha-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mocha-warm"
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full p-2 border border-mocha-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mocha-warm"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full p-2 border border-mocha-light rounded-lg focus:outline-none focus:ring-2 focus:ring-mocha-warm"
              required
            />
          </div>
        </div>

        {/* Кнопка отправки */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Оформить заказ
        </motion.button>
      </form>
    </div>
  );
} 