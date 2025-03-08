'use client';

import React from 'react';

export default function Map() {
  return (
    <section className="py-16 bg-white" id="location">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-mocha-text mb-8">Где нас найти</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-mocha-light/10 p-6 rounded-lg">
            <h3 className="text-2xl font-serif text-mocha-dark mb-4">Наш адрес</h3>
            <div className="space-y-2 text-mocha-text">
              <p>г. Краснодар</p>
              <p className="flex items-center gap-2">
                <a 
                  href="https://yandex.ru/maps/?pt=39.069503,44.985682&z=17&l=map" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-mocha hover:text-mocha-dark underline"
                >
                  Открыть в Яндекс.Картах
                </a>
              </p>
              <p className="mt-4">Координаты:</p>
              <p className="font-mono">44.985682, 39.069503</p>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src={`https://yandex.ru/map-widget/v1/?ll=39.069503,44.985682&z=17&pt=39.069503,44.985682,pm2rdm`}
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Карта с расположением кофейни"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 