'use client';
import { useRouter } from 'next/navigation';

export default function CheckoutButton({ cart }) {
  const router = useRouter();

  if (cart.length > 0) {
    return (
      <button
        className="checkoutButton"
        type="button"
        onClick={() => router.push('/checkout')}
      >
        Check Out
      </button>
    );
  } else {
    return (
      <button
        className="checkoutButton"
        type="button"
        disabled
        style={{ cursor: 'not-allowed' }}
      >
        Cart is Empty
      </button>
    );
  }
}
