import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='pb-16 text-center'>
      <p>
        Copyright © {new Date().getFullYear()} - <Link href='#'>The blog</Link>
      </p>
    </footer>
  );
}
