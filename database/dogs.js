import 'server-only';

const dogs = [
  {
    id: 1,
    name: 'American Akita',
    image: '/images/01.jpg',
    description: 'dog1',
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
    description: 'dog3',
    rating: 4.0,
    numReviews: 9,
    price: '$3237',
  },
  {
    id: 4,
    name: 'French Bulldog',
    image: '/images/04.jpg',
    description: 'dog4',
    rating: 3.5,
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
    price: '$2350',
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
