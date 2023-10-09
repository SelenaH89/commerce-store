import Link from 'next/link';
import { getDogs } from '../../database/dogs';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import RemoveButton from './RemoveButton';
import style from './style.module.scss';

export default async function Cart() {
  const cartItemsCookie = getCookie('dogQuantity');
  let cartItemQuantities = [];
  try {
    cartItemQuantities = parseJson(cartItemsCookie) || [];
  } catch (error) {
    cartItemQuantities = [];
  }

  const dogIdsInCart = cartItemQuantities.map((dogQuantity) => dogQuantity.id);
  let dogList;
  try {
    dogList = await getDogs(dogIdsInCart);
  } catch (error) {
    dogList = [];
  }

  const cartItemQuantitiesMap = cartItemQuantities.reduce(
    (map, dogQuantity) => {
      map[dogQuantity.id] = dogQuantity.quantity;
      return map;
    },
    {},
  );

  const cartItemsWithQuantityGreaterThanOne = dogList.reduce((result, dog) => {
    const quantity = cartItemQuantitiesMap[dog.id];
    if (quantity >= 1) {
      const itemTotal = parseFloat(dog.price * quantity);
      result.push({ ...dog, quantity, itemTotal });
    }
    return result;
  }, []);

  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum, dog) => {
      sum += dog.itemTotal;
      return sum;
    },
    0,
  );

  return (
    <div>
      <div className={style.cartBody}>
        {cartItemsWithQuantityGreaterThanOne.map((dog) => {
          return (
            <div key={`dog-${dog.id}`} className={style.cartItem}>
              <h3 className={style.itemDescription}>{dog.description}</h3>
              <p className={style.itemQuantity}>Quantity: {dog.quantity}</p>
              <p className={style.itemPrice}>
                Price: {dog.price} {dog.currency}
              </p>
              <p className={style.itemSubtotal}>
                Subtotal Price: {dog.price * dog.quantity} €
              </p>
              <RemoveButton />
            </div>
          );
        })}

        <p>Total price: {cartTotalPrice} €</p>
        <Link href="/checkout" className={style.checkoutLink}>
          Checkout
        </Link>
      </div>
    </div>
  );
}
