import { cache } from 'react';
import { sql } from './connect';

type Dogs = {
  id: number;
  name: string;
  image: string;
  rating: number;
  numReviews: number;
  price: number;
};

export const getDogs = cache(async () => {
  const dogs = await sql<Dogs[]>`
  SELECT * FROM dogs
  `;
  return dogs;
});

export const getDogsById = cache(async (id: number) => {
  const [dog] = await sql<Dogs[]>`
  SELECT
    *
  FROM
    dogs
  WHERE
    id = ${id}
  `;
  return dog;
});
