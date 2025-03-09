'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
      }

      router.push('/login?registered=true');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error instanceof Error ? error.message : 'Произошла ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-mocha-lightest flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-serif text-mocha-darker">
            Регистрация
          </h2>
          <p className="mt-2 text-center text-sm text-mocha-dark">
            Уже есть аккаунт?{' '}
            <Link href="/login" className="text-mocha-warm hover:text-mocha-dark">
              Войдите
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-mocha-dark mb-1">
                Имя
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
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
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                placeholder="Введите ваш email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-mocha-dark mb-1">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                placeholder="Введите пароль"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-mocha-dark mb-1">
                Подтвердите пароль
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-mocha-light placeholder-mocha-cool text-mocha-darker focus:outline-none focus:ring-mocha-warm focus:border-mocha-warm"
                placeholder="Повторите пароль"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-mocha-warm hover:bg-mocha-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mocha-warm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  Регистрация...
                </>
              ) : (
                'Зарегистрироваться'
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </main>
  );
} 