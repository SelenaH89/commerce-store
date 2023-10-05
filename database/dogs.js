import 'server-only';

const dogs = [
  {
    id: 1,
    name: 'American Akita',
    image: '/images/01.jpg',
    description: 'dog1',
    price: '$1780',
  },
  {
    id: 2,
    name: 'Poodle',
    image: '/images/02.jpg',
    description: 'dog2',
    price: '$2200',
  },
  {
    id: 3,
    name: 'Aussiechon',
    image: '/images/03.jpg',
    description: 'dog3',
    price: '$3237',
  },
  {
    id: 4,
    name: 'French Bulldog',
    image: '/images/04.jpg',
    description: 'dog4',
    price: '$1460',
  },
  {
    id: 5,
    name: 'Pomeranian',
    image: '/images/05.jpg',
    description: 'dog5',
    price: '$2350',
  },
  {
    id: 6,
    name: 'German Shepherd',
    image: '/images/06.jpg',
    description: 'dog5',
    price: '$2350',
  },
];

export function getDogs() {
  return dogs;
}
export function getDogById(id) {
  return dogs.find((dog) => dog.id === id);
}
