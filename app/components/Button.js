'use client';

import { useRouter } from 'next/navigation';
import style from './Button.module.scss';

export default function Button() {
  const router = useRouter();
  const Button = () => {
    router.push('/dogs');
  };

  return (
    <div>
      <button onClick={Button}>Puppies for Sale</button>
    </div>
  );
}
