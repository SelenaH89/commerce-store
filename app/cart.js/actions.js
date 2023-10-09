'use server';
import { getCookie, setCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';

export async function handleButtonClick(id) {
  const currentCartCookie = getCookie('cart');

  const currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];

  if (!Array.isArray(currentCart)) {
    // handle invalid parsed JSON
    return;
  }

  const updatedCart = currentCart.filter((dog) => dog.id !== id);

  try {
    await setCookie(safeStringify(updatedCart));
  } catch (error) {
    console.error('Error setting cookie:', error);
  }
}
