'use client';

import React from 'react';
import OrderForm from '../components/OrderForm';

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-mocha-lightest py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-center text-mocha-darker mb-8">Оформление заказа</h1>
        <OrderForm />
      </div>
    </main>
  );
} 