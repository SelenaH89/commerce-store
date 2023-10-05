import Link from 'next/link';
import { getCookie } from '../../public/util/cookies';
import { getDogs } from '../database/dogs';
import styles from './page.module.scss';
import { parseJson } from './public/util/json';

export default async function cartFunction() {
  const dogsCookie = getCookie('dogQuantity');
  const dogsQuantity = !dogsCookie ? [] : parseJson(dogsCookie);
  const dogs = await getDogs();

  const dogsInCart = dogs.map((dog) => {
    const matchingDogsFromCookie = dogsQuantity.find(
      (dogQuantity) => dog.id === dogQuantity.id,
    );
    return { ...dog, quantity: matchingDogsFromCookie?.quantity };
  });

  const dogsWithQuantity = dogsInCart.filter((dogInCart) => {
    return dogInCart.quantity >= 1;
  });

  const totalPrice = dogsWithQuantity.reduce((sum, dog) => {
    const itemTotal = parseFloat(dog.price * dog.quantity);
    sum += itemTotal;
    return sum;
  }, 0);

  console.log(dogs);
  return (
    <div className="cartBody">
      {dogsWithQuantity.map((dog) => {
        return (
          <div key={`dog-${dog.id}`} className="cartItem">
            <h3 className="itemDescription">{dog.description}</h3>
            <p className="itemQuantity">Quantity: {dog.quantity}</p>
            <p className="itemPrice">
              Price: {dog.price} {dog.currency}
            </p>
            <p className="subtotal">
              Subtotal Price: {dog.price * dog.quantity} €
            </p>
          </div>
        );
      })}

      <p>Total price: {totalPrice} €</p>
      <Link href="/checkout" className="checkoutLink">
        Checkout
      </Link>
    </div>
  );
}
