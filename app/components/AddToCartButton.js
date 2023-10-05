import { useState } from 'react';
import { createOrUpdateItem } from './actions.js';

export default function AddToCartButton(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <p>Quantity:</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.currentTarget.value));
        }}
      />
      <br />
      <button
        className={styles['button-11']}
        onClick={async () => {
          try {
            await createOrUpdateItem(props.dogId, quantity);
            alert('Item added to cart!');
          } catch (error) {
            alert('Error adding item to cart. Please try again.');
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
