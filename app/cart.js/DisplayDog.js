import Image from 'next/image';
import React from 'react';
import { getDogs } from '../../database/dogs';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import RemoveButton from './RemoveButton';
import style from './style.module.scss';

export default async function DisplayItem() {
  let dogs;
  try {
    dogs = await getDogs();
  } catch (error) {
    handleError('Error fetching dogs', error);
    return null;
  }

  let currentCartCookie;
  try {
    currentCartCookie = getCookie('cart');
  } catch (error) {
    handleError('Error getting cart cookie', error);
    return null;
  }

  let currentCart;
  try {
    currentCart = currentCartCookie ? parseJson(currentCartCookie) : [];
  } catch (error) {
    handleError('Error parsing cart JSON', error);
    return null;
  }

  const currentCartMap = new Map();
  currentCart.forEach((item) => {
    currentCartMap.set(item.id, item);
  });

  let totalPrice = 0;

  return (
    <>
      <ul className={style.cartList}>
        {dogs
          .filter((dog) => {
            const itemToInclude = currentCartMap.get(dog.id);
            return itemToInclude;
          })
          .map((dog) => {
            const itemToInclude = currentCartMap.get(dog.id);

            const subTotal = dog.price * itemToInclude.quantity;
            totalPrice += subTotal;

            const dogTestId = `cart-dog-${dog.id}`;
            const quantityTestId = `cart-dog-quantity-${dog.id}`;
            const removeTestId = `cart-dog-remove-${dog.id}`;

            return (
              <li data-test-id={dogTestId} key={`dog-div-${dog.id}`}>
                <div>
                  <Image
                    className={style.dogsImages}
                    src={`/images/${dog.name}.jpg`}
                    alt={dog.name}
                    width={300}
                    height={300}
                    priority={true}
                  />
                  <p className={style.cartText} data-test-id={quantityTestId}>
                    Quantity: {itemToInclude.quantity}
                  </p>
                  <p className={style.cartText}>Subtotal: {subTotal} €</p>
                  <RemoveButton
                    id={itemToInclude.id}
                    data-test-id={removeTestId}
                  />
                </div>
              </li>
            );
          })}
      </ul>
      <h3 className={style.total} data-test-id="cart-total">
        Total price: {totalPrice} €
      </h3>
    </>
  );
}
function handleError(message, error) {
  console.error(message, error);
}
