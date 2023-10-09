'use client';

import { useState } from 'react';

export default function SetDogCounter() {
  // const [currentState, updater] = useState(Initial State)
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}{' '}
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => setCount(count < 20 ? count + 1 : 20)}>+</button>
      *max quantity: 10
    </div>
  );
}
