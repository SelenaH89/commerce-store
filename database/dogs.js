import 'server-only';

const dogs = [
  {
    id: 1,
    name: 'American Akita',
    image: '/images/01.jpg',
    description:
      'A big and powerful dog breed that is well-known for its cleverness, devotion, and dignity. In their native country, Japan, they were initially trained for royal guarding and hunting.',
    rating: 4.5,
    numReviews: 10,
    price: '$1780',
  },
  {
    id: 2,
    name: 'Poodle',
    image: '/images/02.jpg',
    description: 'dog2',
    rating: 3.5,
    numReviews: 8,
    price: '$2200',
  },
  {
    id: 3,
    name: 'Aussiechon',
    image: '/images/03.jpg',
    description:
      'Aussiechon puppies are stunning little fur babies that enchant the world with their charismatic personalities and passion for all things fun. They are bouncy, playful and friendly, and they make excellent companion pets. Fans of cuddles and adventures, these little puppies gift their humans with a never-ending supply of joy. If you’re looking for a puppy to bring fun into your world, the Aussiechon is the perfect choice.',
    rating: 4.0,
    numReviews: 9,
    price: '$3237',
  },
  {
    id: 4,
    name: 'French Bulldog',
    image: '/images/04.jpg',
    description:
      'French Bulldogs are sweet little fur-babies that delight with their extravagant looks and excellent personalities. If you’re looking for a puppy to entertain you with the cutest stunts you’ve ever seen, the French Bulldogs are the puppies for you. French Bulldog puppies are natural-born comedians who love to entertain and impress. They have a gift for tricks and are remarkable at spreading joy. These gorgeous puppies train easily, love big, and are effortless to care for. They love cuddles and games, and are perfect for families',

    rating: 2.5,
    numReviews: 6,
    price: '$1460',
  },
  {
    id: 5,
    name: 'Pomeranian',
    image: '/images/05.jpg',
    description: 'dog5',
    rating: 3.5,
    numReviews: 8,
    price: '$2350',
  },
  {
    id: 6,
    name: 'German Shepherd',
    image: '/images/06.jpg',
    description: 'dog6',
    rating: 4.5,
    numReviews: 9,
    price: '$2000',
  },
  {
    id: 7,
    name: 'Golden Retriever',
    image: '/images/07.jpg',
    description: 'dog7',
    rating: 5.0,
    numReviews: 5,
    price: '$3350',
  },
];

export function getDogs() {
  return dogs;
}
export function getDogById(id) {
  return dogs.find((dog) => dog.id === id);
}
