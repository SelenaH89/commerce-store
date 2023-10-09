'use client';
import { useState } from 'react';
import { createOrUpdateItem } from './actions.js';
import style from './AddToCartButton.module.scss';

export default function AddToCartButton(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={style.container}>
      <p>Quantity:</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
        className={style.quantityInput}
      />
      <br />
      <button
        className={`${style.btn} ${style.btnPrimary}`}
        onClick={async () => {
          await createOrUpdateItem(props.dogId, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
