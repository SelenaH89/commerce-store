import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getDogs } from '../../database/dogs';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import styles from './DogsPage.module.scss';

export default async function DogsPage() {
  const dogs = await getDogs();
  const dogItemCookie = getCookie('dogQuantity');

  const dogQuantity = !dogItemCookie ? [] : parseJson(dogItemCookie);

  const dogsWithQuantity = dogs.map((dog) => {
    const matchingDogsWithQuantityFromCookie = dogQuantity.find(
      (dogItem) => dog.id === dogItem.id,
    );
    return {
      ...dog,
      quantity: matchingDogsWithQuantityFromCookie?.quantity,
    };
  });
  function renderStars(rating) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className={styles.star} />,
        );
      } else if (rating + 0.5 >= i) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className={styles.star}
          />,
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ opacity: 0.2 }}
            className={styles.star}
          />,
        );
      }
    }

    return stars;
  }

  return (
    <main className={styles.container}>
      <h1>These are my dogs</h1>
      <ul className={styles.dogList}>
        {dogsWithQuantity.map((dog) => (
          <li key={`dog-${dog.id}`} className={styles.dogItem}>
            <a data-test-id={`dog-${dog.id}`} href={`/dogs/${dog.id}`}>
              <Image src={dog.image} width={200} height={200} alt={dog.name} />
              <div className={styles.dogName}>
                <strong>Name: </strong> {dog.name}
              </div>
              <div>
                <strong>Rating: </strong> {renderStars(dog.rating)}
              </div>
              <div>
                <strong>Price: </strong> {dog.price} USD
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
