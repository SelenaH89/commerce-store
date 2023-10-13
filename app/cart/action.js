'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';

export default async function DeleteDog(id) {
  const dogItemCookie = getCookie('cart');

  const dogsQuantity = !dogItemCookie ? [] : parseJson(dogItemCookie);
  console.log(dogItemCookie);

  const updatedDogsQuantity = dogsQuantity.filter((item) => item.id !== id);

  await cookies().set('cart', JSON.stringify(updatedDogsQuantity));

  return updatedDogsQuantity.length;
}
