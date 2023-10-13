'use client';

import 'bulma/css/bulma.css';
import DeleteDog from './action';

type DogId = {
  id: number;
};

export default function DeleteButton(dog: DogId) {
  const handleDeleteClick = async () => {
    await DeleteDog(dog.id);
  };

  return (
    <div>
      <button
        className="delete is-medium"
        data-test-id="cart-product-remove-<product id>"
        onClick={handleDeleteClick}
      >
        Remove
      </button>
    </div>
  );
}
