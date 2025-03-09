'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProtectedRoute from '../components/auth/ProtectedRoute';

export default function ProfilePage() {
  const { data: session } = useSession();

  const formatDate = (date: string | null) => {
    if (!date) return 'Не указана';
    return new Date(date).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-mocha-lightest pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif text-mocha-darker">
                  Личный кабинет
                </h1>
                <Link href="/profile/edit">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-mocha-warm hover:bg-mocha-dark text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Редактировать профиль
                  </motion.button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-serif text-mocha-darker mb-4">
                      Личная информация
                    </h2>
                    <div className="bg-mocha-lightest p-6 rounded-lg space-y-3">
                      <p className="text-mocha-dark">
                        <span className="font-medium">Имя:</span> {session?.user?.name || 'Не указано'}
                      </p>
                      <p className="text-mocha-dark">
                        <span className="font-medium">Email:</span> {session?.user?.email || 'Не указан'}
                      </p>
                      <p className="text-mocha-dark">
                        <span className="font-medium">Телефон:</span> {session?.user?.phone || 'Не указан'}
                      </p>
                      <p className="text-mocha-dark">
                        <span className="font-medium">Дата рождения:</span> {formatDate(session?.user?.birthDate)}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-serif text-mocha-darker mb-4">
                      Адрес доставки
                    </h2>
                    <div className="bg-mocha-lightest p-6 rounded-lg">
                      <p className="text-mocha-dark">
                        {session?.user?.address || 'Адрес не указан'}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-serif text-mocha-darker mb-4">
                      Бонусная программа
                    </h2>
                    <div className="bg-mocha-lightest p-6 rounded-lg space-y-3">
                      <p className="text-mocha-dark">
                        <span className="font-medium">Статус:</span> Постоянный клиент
                      </p>
                      <p className="text-mocha-dark">
                        <span className="font-medium">Бонусы:</span> {session?.user?.bonusPoints || 0} баллов
                      </p>
                      <div className="h-2 bg-mocha-light/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-mocha-warm rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((session?.user?.bonusPoints || 0) / 1000 * 100, 100)}%` }}
                        />
                      </div>
                      <p className="text-sm text-mocha-cool">
                        До следующего уровня: {1000 - (session?.user?.bonusPoints || 0)} баллов
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-serif text-mocha-darker mb-4">
                    История заказов
                  </h2>
                  <div className="bg-mocha-lightest p-6 rounded-lg">
                    <p className="text-mocha-dark text-center py-4">
                      У вас пока нет заказов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
} 