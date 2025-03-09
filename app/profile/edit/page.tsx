'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

export default function EditProfilePage() {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
  });

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        email: session.user.email || '',
        phone: session.user.phone || '',
        address: session.user.address || '',
        birthDate: session.user.birthDate ? new Date(session.user.birthDate).toISOString().split('T')[0] : '',
      });
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
      }

      // Обновляем сессию с новыми данными
      await update({
        ...session,
        user: {
          ...session?.user,
          ...formData,
        },
      });

      router.push('/profile');
    } catch (error) {
      console.error('Update error:', error);
      setError(error instanceof Error ? error.message : 'Произошла ошибка при обновлении профиля');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-mocha-lightest pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-serif text-mocha-darker mb-8">
                Редактирование профиля
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mocha-dark mb-1">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mocha-dark mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-mocha-dark mb-1">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                    placeholder="Введите ваш телефон"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-mocha-dark mb-1">
                    Адрес
                  </label>
                  <textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                    placeholder="Введите ваш адрес"
                  />
                </div>

                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium text-mocha-dark mb-1">
                    Дата рождения
                  </label>
                  <input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-mocha-warm hover:bg-mocha-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mocha-warm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Сохранение...' : 'Сохранить'}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => router.push('/profile')}
                    className="flex-1 py-2 px-4 border border-mocha-warm text-sm font-medium rounded-lg text-mocha-warm bg-white hover:bg-mocha-lightest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mocha-warm"
                  >
                    Отмена
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
} 