'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../public/util/cookies';
import { parseJson } from '../../../public/util/json';

// Case A: cookie is undefined
// Case B: cookie is defined but has the dog id
// Case C: cookie is defined but doesn't have the dog id

export async function createOrUpdateItem(dogId, quantity) {
  // 1. get the current cookie
  const dogItemCookie = getCookie('cart');
  // 2. parse the cookie value

  const dogsQuantity = !dogItemCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(dogItemCookie);

  // 3. we edit the cookie value
  // We get the object for the dog in cookies or undefined
  const dogToUpdate = dogsQuantity.find((dogQuantity) => {
    return dogQuantity.id === dogId;
  });

  // Case B: cookie is defined and dog id already exists!
  if (dogToUpdate) {
    dogToUpdate.quantity = quantity;
  } else {
    // Case C: cookie is defined and dog id doesn't exist!
    dogsQuantity.push({
      id: dogId,
      quantity: quantity,
    });
  }

  // 4. we override the cookie
  await cookies().set('cart', JSON.stringify(dogsQuantity));
}
