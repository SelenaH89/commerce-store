'use server';
import { getCookie, setCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';

export default async function deleteDog(id) {
  const parsedId = Number(id);
  if (isNaN(parsedId) || parsedId <= 0) {
    throw new Error('Invalid id parameter. Expected a positive number.');
  }
  const dogItemCookie = getCookie('dogQuantity');

  const parsedDogsQuantity = parseJson(dogItemCookie);
  const dogsQuantity =
    parsedDogsQuantity !== undefined ? parsedDogsQuantity : [];

  if (process.env.NODE_ENV === 'development') {
    console.debug(dogItemCookie);
  }

  const updatedDogsQuantity = dogsQuantity.filter(
    (item) => item.id !== parsedId,
  );

  try {
    await setCookie('dogQuantity', JSON.stringify(updatedDogsQuantity));
  } catch (error) {
    console.error('Failed to set cookie:', error);
    // Handle the error here, e.g. show an error message to the user or retry the operation.
    throw error;
  }

  return updatedDogsQuantity.length;
}
