'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-mocha-lightest flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-mocha-darker mb-2">Что-то пошло не так!</h2>
          <p className="text-mocha-dark mb-4">{error.message}</p>
          <button
            onClick={reset}
            className="px-4 py-2 bg-mocha-warm text-white rounded-lg hover:bg-mocha-dark transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    </div>
  );
} 