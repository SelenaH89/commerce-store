import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { getDogs } from '../../database/dogs';
import styles from './DogsPage.module.scss';

export default async function DogsPage() {
  const dogs = await getDogs();
  if (!dogs) {
    return {
      notFound: true,
    };
  }

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
        {dogs.map((dog) => (
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
