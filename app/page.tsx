'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Map from './components/Map';

export default function Home() {
  return (
    <main className="min-h-screen bg-mocha-lightest">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/interior.jpg"
          alt="Интерьер кофейни"
          fill
          className="object-cover"
          priority
          quality={100}
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mocha-darker/50 via-mocha-darker/40 to-mocha-darker/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-serif mb-4"
          >
            Проект Икс
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-sans mb-4 text-mocha-lighter"
          >
            Кофейня & Пекарня
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-serif mb-8 cursor-default text-mocha-lighter"
          >
            Бицепс и кофе 💪 ☕️
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <button className="bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto">
              Заказать онлайн
            </button>
            <button className="bg-mocha-lightest/90 hover:bg-white text-mocha-darker font-bold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto sm:ml-4">
              Предзаказ выпечки
            </button>
          </motion.div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section id="preorder" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-mocha-darker mb-6">Быстрый заказ</h2>
            <p className="text-lg text-mocha-dark mb-8">
              Закажите любимый кофе или выпечку заранее и заберите без ожидания в удобное время
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-mocha-lightest p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-mocha-darker mb-3">Время ожидания</h3>
                <p className="text-mocha-dark">Кофе: 3-5 минут</p>
                <p className="text-mocha-dark">Выпечка: готово к указанному времени</p>
              </div>
              <div className="bg-mocha-lightest p-6 rounded-lg">
                <h3 className="text-2xl font-serif text-mocha-darker mb-3">Способы заказа</h3>
                <p className="text-mocha-dark">• Через приложение</p>
                <p className="text-mocha-dark">• По телефону</p>
                <p className="text-mocha-dark">• На месте</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-16 bg-mocha-lighter/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-mocha-darker mb-12">Наше меню</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-serif text-mocha-darker mb-4">Кофе</h3>
              <p className="text-mocha-dark mb-4">Свежеобжаренные зерна и авторские напитки</p>
              <p className="text-sm text-mocha-cool mb-4">Время приготовления: 3-5 минут</p>
              <button className="bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 w-full">Заказать</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-serif text-mocha-darker mb-4">Выпечка</h3>
              <p className="text-mocha-dark mb-4">Свежая выпечка каждый день</p>
              <p className="text-sm text-mocha-cool mb-4">Доступен предзаказ</p>
              <button className="bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 w-full">Предзаказ</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-serif text-mocha-darker mb-4">Десерты</h3>
              <p className="text-mocha-dark mb-4">Авторские десерты и сладости</p>
              <p className="text-sm text-mocha-cool mb-4">Предзаказ с 8:00 до 22:00 часов</p>
              <button className="bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 w-full">Заказать</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-mocha-darker mb-12">Наша выпечка</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/products/strudel.jpg"
                alt="Штрудель с вишней"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-darker/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-serif">Штрудель с вишней</h3>
                  <p className="text-mocha-lighter text-sm">Нежное слоеное тесто с сочной вишневой начинкой</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/products/potato-pies.jpg"
                alt="Пирожки с картошкой"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-darker/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-serif">Пирожки с картошкой</h3>
                  <p className="text-mocha-lighter text-sm">Свежие домашние пирожки с картофельной начинкой</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-64 group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src="/products/khachapuri.jpg"
                alt="Хачапури с сыром"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha-darker/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-serif">Хачапури с сыром</h3>
                  <p className="text-mocha-lighter text-sm">Сочные хачапури с тянущимся сыром</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mocha-warm hover:bg-mocha-dark text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Смотреть все фото
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-mocha-darker mb-12">Почему мы?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡️</div>
              <h3 className="text-xl font-serif text-mocha-darker mb-2">Быстро</h3>
              <p className="text-mocha-dark">Заказ готов за 3-5 минут</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-serif text-mocha-darker mb-2">Удобно</h3>
              <p className="text-mocha-dark">Заказ заранее через приложение</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-serif text-mocha-darker mb-2">Качественно</h3>
              <p className="text-mocha-dark">Свежая выпечка каждый день</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-serif text-mocha-darker mb-2">Бонусы</h3>
              <p className="text-mocha-dark">Программа лояльности</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <Map />
    </main>
  );
} 