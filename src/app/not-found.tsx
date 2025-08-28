import ErrorMessage from '@/components/ErrorMessage';
import clsx from 'clsx';

export default function NotFound() {
  return (
    <>
      <ErrorMessage
        pageTitle='Pagina nao encontrada'
        contentTitle='404 - Page Not Found'
        content='Sorry, the page you are looking for does not exist.'
      />
    </>
  );
}
