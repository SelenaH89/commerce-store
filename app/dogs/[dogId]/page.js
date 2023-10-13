import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getDogs } from '../../../database/dogs';
import styles from '../page.module.scss';
import AddToCartButton from './AddToCartButton';

export async function SingleDogPage({ props }) {
  const singleDog = await getDogs(Number(props.params.dogId));

  return {
    title: singleDog ? singleDog.name : '',
  };
}

export default async function DogPage(props) {
  const [singleDog] = await getDogs(Number(props.params.dogId));

  if (!singleDog) {
    return notFound();
  }
  return (
    <div>
      <Head>
        <title>{singleDog.description}</title>{' '}
        <meta
          name="description"
          content={`Shop the ${singleDog.description} dog - Price: ${singleDog.price} ${singleDog.currency}`}
        />
      </Head>
      <div className={styles.singleDogBody}>
        <Image
          src={singleDog.image}
          alt={singleDog.name}
          width={500}
          height={500}
          className={styles.dogImage}
          data-test-id="dog-image"
        />
        <h1>{singleDog.name}</h1>
        <p data-test-id="dog-price">
          {singleDog.price} {singleDog.currency}
        </p>
        <AddToCartButton dogId={singleDog.id} />
      </div>
    </div>
  );
}
