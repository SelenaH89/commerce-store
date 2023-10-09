'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../public/util/cookies';
import { parseJson } from '../../../public/util/json';

export async function createOrUpdateItem(dogId, quantity) {
  if (!dogId || !quantity) {
    throw new Error('Invalid dogId or quantity');
  }

  const dogItemCookie = getCookie('dogQuantity');
  const dogsQuantity = !dogItemCookie ? [] : parseJson(dogItemCookie);

  const updatedDogsQuantity = dogsQuantity.map((dogQuantity) => {
    if (dogQuantity.id === dogId) {
      return {
        ...dogQuantity,
        quantity: quantity,
      };
    }
    return dogQuantity;
  });

  try {
    await cookies().set('dogQuantity', JSON.stringify(updatedDogsQuantity));
    return true;
  } catch (error) {
    console.error('Failed to set cookie:', error);
    // handle the error or provide fallback behavior
  }
}
