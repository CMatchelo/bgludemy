import { formatDateTime, formatRelativeDate } from '@/utils/format-datetime';

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={formatDateTime(dateTime)}
      className='text-sm/tight text-slate-600 block'
    >
      {formatDateTime(dateTime)} - {formatRelativeDate(dateTime)}
    </time>
  );
}
