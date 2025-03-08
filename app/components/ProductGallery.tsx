import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

const categories = ['Все', 'Кофе', 'Выпечка', 'Десерты'];

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const products = [
    // Кофе
    {
      id: 1,
      title: "Капучино",
      description: "Классический капучино с нежной молочной пенкой",
      price: "180",
      imageUrl: "/products/cappuccino.jpg",
      category: "Кофе"
    },
    {
      id: 2,
      title: "Латте",
      description: "Мягкий кофейный напиток с большим количеством молока",
      price: "200",
      imageUrl: "/products/latte.jpg",
      category: "Кофе"
    },
    {
      id: 3,
      title: "Американо",
      description: "Классический черный кофе",
      price: "150",
      imageUrl: "/products/americano.jpg",
      category: "Кофе"
    },
    // Выпечка
    {
      id: 4,
      title: "Пирожки с картошкой",
      description: "Свежие домашние пирожки с картофельной начинкой",
      price: "80",
      imageUrl: "/products/potato-pies.jpg",
      category: "Выпечка"
    },
    {
      id: 5,
      title: "Пирожки с капустой",
      description: "Ароматные домашние пирожки с капустной начинкой",
      price: "80",
      imageUrl: "/products/cabbage-pies.jpg",
      category: "Выпечка"
    },
    {
      id: 6,
      title: "Хачапури с сыром",
      description: "Сочные хачапури с тянущимся сыром",
      price: "160",
      imageUrl: "/products/khachapuri.jpg",
      category: "Выпечка"
    },
    {
      id: 7,
      title: "Штрудель с вишней",
      description: "Нежное слоеное тесто с сочной вишневой начинкой",
      price: "180",
      imageUrl: "/products/strudel.jpg",
      category: "Выпечка"
    },
    {
      id: 8,
      title: "Круассан",
      description: "Свежий масляный круассан с хрустящей корочкой",
      price: "120",
      imageUrl: "/products/croissant.jpg",
      category: "Выпечка"
    },
    {
      id: 9,
      title: "Синнабон",
      description: "Булочка с корицей и сливочной глазурью",
      price: "160",
      imageUrl: "/products/cinnabon.jpg",
      category: "Выпечка"
    },
    {
      id: 10,
      title: "Киш Лорен",
      description: "Французский пирог с беконом и сыром",
      price: "220",
      imageUrl: "/products/quiche.jpg",
      category: "Выпечка"
    },
    // Десерты
    {
      id: 11,
      title: "Чизкейк",
      description: "Нежный чизкейк Нью-Йорк",
      price: "280",
      imageUrl: "/products/cheesecake.jpg",
      category: "Десерты"
    },
    {
      id: 12,
      title: "Тирамису",
      description: "Классический итальянский десерт с кофейным вкусом",
      price: "260",
      imageUrl: "/products/tiramisu.jpg",
      category: "Десерты"
    },
    {
      id: 13,
      title: "Макаронс",
      description: "Ассорти из 3 французских макарон",
      price: "240",
      imageUrl: "/products/macarons.jpg",
      category: "Десерты"
    }
  ];

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-mocha-light/10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-center text-mocha-text mb-8"
        >
          Наши продукты
        </motion.h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-mocha-dark text-white'
                  : 'bg-white text-mocha-dark hover:bg-mocha-light/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 