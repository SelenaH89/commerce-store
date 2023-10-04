import Image from 'next/image';
import React from 'react';
import { data } from '../utils/data';

const Dogs = () => {
  return (
    <div>
      {data.dogs.map((dog) => (
        <Image
          key={dog.id}
          src={`/images/${dog.image}`}
          height={230}
          width={230}
          style={{ objectFit: 'cover', height: '230px' }}
          alt={dog.name}
        />
      ))}
    </div>
  );
};

export default Dogs;
