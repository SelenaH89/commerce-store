'use client';

import { useState } from 'react';
import { createCookie } from '../../actions';

export default function SetDogForm() {
  const [cookieValue, setCookieValue] = useState('');

  return (
    <form>
      <input
        type="number"
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
        placeholder="number of item you want to order"
      />
      {/* Instead of using onClick we use formAction */}
      <button formAction={async () => await createCookie(cookieValue)}>
        Add item to cart
      </button>
    </form>
  );
}
