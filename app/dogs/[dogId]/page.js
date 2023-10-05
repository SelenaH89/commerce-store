import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDogs } from '../../../database/dogs';

export async function generateMetadata({ params }) {
  const singleDog = await getDogs(Number(params.dogId));

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
      <h1>{singleDog.name}</h1>
      <img
        data-test-id="dog-image"
        src={singleDog.image}
        width={300}
        height={300}
        alt={singleDog.name}
      />
      <p data-test-id="dog-price">Price: {singleDog.price}</p>
    </div>
  );
}
