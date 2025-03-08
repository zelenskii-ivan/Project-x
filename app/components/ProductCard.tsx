import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
}

export default function ProductCard({ title, description, price, imageUrl, category }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-mocha-dark/80 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-mocha-dark mb-2">{title}</h3>
        <p className="text-mocha-text mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-mocha-dark">{price} ₽</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Заказать
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 