'use client';
import { deleteCookie } from './action';

export default function DeleteCookie() {
  return (
    <button
      data-test-id="checkout-confirm-order"
      formAction={async () => await deleteCookie()}
    >
      {' '}
      Confirm Order{' '}
    </button>
  );
}
