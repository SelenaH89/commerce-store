'use server';
import { cookies } from 'next/headers';
import { getCartData } from './cart/Cart.js';

export async function addCartItemServerAction(dog) {
  let newDogs;

  const allDogs = getCartData();

  // In case the product is the cart already, just increase the quantiy
  const dogAlreadyThere = allDogs.find((itm) => itm.id === dog.id);
  if (dogAlreadyThere) {
    dogAlreadyThere.quantity += dog.quantity;
    newDogs = allDogs;
  } else {
    newDogs = [...allDogs, dog];
  }

  await cookies().set('cart', JSON.stringify(newDogs));
}

export async function removeCartDogsServerAction(dogToBeRemoved) {
  const allDogs = getCartData();

  const allDogsNew = allDogs.filter((dog) => dog.id !== dogToBeRemoved.id);

  await cookies().set('cart', JSON.stringify(allDogsNew));
}
export async function clearCartItemServerAction() {
  await cookies().delete('cart');
}
