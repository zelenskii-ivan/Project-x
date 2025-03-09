'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const products = [
    {
      src: '/products/strudel.jpg',
      alt: 'Штрудель с вишней',
      title: 'Штрудель с вишней',
      description: 'Нежное слоеное тесто с сочной вишневой начинкой'
    },
    {
      src: '/products/potato-pies.jpg',
      alt: 'Пирожки с картошкой',
      title: 'Пирожки с картошкой',
      description: 'Свежие домашние пирожки с картофельной начинкой'
    },
    {
      src: '/products/khachapuri.jpg',
      alt: 'Хачапури с сыром',
      title: 'Хачапури с сыром',
      description: 'Сочные хачапури с тянущимся сыром'
    },
    {
      src: '/products/cabbage-pies.jpg',
      alt: 'Пирожки с капустой',
      title: 'Пирожки с капустой',
      description: 'Ароматные пирожки с капустной начинкой'
    },
    {
      src: '/products/strudel.jpg',
      alt: 'Штрудель с яблоком',
      title: 'Штрудель с яблоком',
      description: 'Хрустящее тесто с яблочной начинкой '
    },
    {
      src: '/products/khachapuri.jpg',
      alt: 'Хачапури по-аджарски',
      title: 'Хачапури по-аджарски',
      description: 'Традиционные хачапури с яйцом'
    }
  ];

  return (
    <main className="min-h-screen bg-mocha-lightest pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-center text-mocha-darker mb-12">
          Наша выпечка
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={`${product.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative h-[300px] md:h-[400px] lg:h-[500px] group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={product.src}
                alt={product.alt}
                fill
                quality={100}
                priority={index < 3}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-darker/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-serif">{product.title}</h3>
                  <p className="text-mocha-lighter text-sm">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 