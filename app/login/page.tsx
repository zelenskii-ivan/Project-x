'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Неверный email или пароль');
      } else {
        router.push('/profile');
      }
    } catch (error) {
      setError('Произошла ошибка при входе');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-mocha-lightest pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-serif text-mocha-darker mb-8">
              Вход в систему
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mocha-warm hover:bg-mocha-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mocha-warm"
                >
                  {isLoading ? 'Вход...' : 'Войти'}
                </button>
              </div>

              <div className="text-center text-sm">
                <Link href="/register" className="text-mocha-warm hover:text-mocha-dark">
                  Нет аккаунта? Зарегистрироваться
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 