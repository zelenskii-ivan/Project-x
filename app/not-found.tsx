import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-mocha-lightest flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-mocha-darker mb-4">404</h2>
        <p className="text-xl text-mocha-dark mb-8">Страница не найдена</p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-mocha-warm text-white rounded-lg hover:bg-mocha-dark transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 