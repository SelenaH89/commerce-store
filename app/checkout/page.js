import Head from 'next/head';
import { getDogs } from '../../database/dogs';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import { deleteCookies } from './action';
import styles from './Checkout.module.scss';
import Form from './Form';

function parsePrice(price) {
  if (typeof price === 'number') return price;
  return parseFloat(price.replace(/[^0-9.]/g, ''));
}
export default async function Checkout() {
  const cartItemsCookie = getCookie('cart');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const dogList = await getDogs();

  const cartItemsWithQuantities = dogList.map((dog) => {
    const matchingDogsFromCookie = cartItemQuantities.find(
      (dogQuantity) => dog.id === dogQuantity.id,
    );
    return { ...dog, quantity: matchingDogsFromCookie?.quantity };
  });

  const cartItemsWithQuantityGreaterThanOne = cartItemsWithQuantities.filter(
    (dogInCart) => {
      return dogInCart.quantity >= 1;
    },
  );

  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum, dog) => {
      const price = parsePrice(dog.price);
      const quantity = parseFloat(dog.quantity);

      if (isNaN(price) || isNaN(quantity)) {
        console.error(
          `Dog ID: ${dog.id} has invalid price or quantity. Price: ${dog.price}, Quantity: ${dog.quantity}`,
        );
        return sum; // Continue the summation without this dog
      }

      const itemTotal = price * quantity;
      return sum + itemTotal;
    },
    0,
  );
  return (
    <div className={styles['checkout-container']}>
      <Head>
        <title>Checkout Page</title>
        <meta
          name="description"
          content="Complete your order and provide shipping and payment information."
        />
      </Head>
      <Form />
      <div className={styles['card-body']}>
        <p>Total price: {cartTotalPrice} €</p>
      </div>
    </div>
  );
}
