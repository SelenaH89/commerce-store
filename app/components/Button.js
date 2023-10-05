'use client';

import { useRouter } from 'next/navigation';

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
