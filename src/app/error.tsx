'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorMessage
        pageTitle='Slug nao encontrada'
        contentTitle='501'
        content={
          <button onClick={reset}>
            Ocorreu um erro ao carregar a postagem. Por favor, tente novamente
            mais tarde.
          </button>
        }
      />
    </>
  );
}
