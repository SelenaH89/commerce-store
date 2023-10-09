// RemoveButton.js
'use client';
import style from '../cart/style.module.scss';
import DeleteDog from './action';

export default function RemoveButton({ dog }) {
  if (!dog) {
    console.error('No dog data provided to RemoveButton!');
    return null; // Don't render the button if there's no dog data
  }
  const handleDeleteClick = async () => {
    console.log('Dog ID: ', dog.id);
    await DeleteDog(dog.id);
  };
  return (
    <div className={style.removeButtonContainer}>
      <button
        className={`${style.removeButton} btn btn-primary`}
        data-test-id={`cart-dog-remove-${dog.id}`}
        onClick={handleDeleteClick}
      >
        Remove
      </button>
    </div>
  );
}
