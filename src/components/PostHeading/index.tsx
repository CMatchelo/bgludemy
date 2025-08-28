import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export default function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-xl/tight sm:text-3xl font-bold',
  };

  const commonClasses = '';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link className='transition group-hover:text-slate-600' href={url}>
        {children}
      </Link>
    </Tag>
  );
}
