import Image from 'next/image';
import Link from 'next/link';
import { getDogs } from '../../database/dogs';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import RemoveButton from './RemoveButton';

function parsePrice(price) {
  if (typeof price === 'number') return price;
  return parseFloat(price.replace(/[^0-9.]/g, ''));
}

export default async function Cart() {
  const cartItemsCookie = getCookie('cart');
  const cartItemQuantities = !cartItemsCookie ? [] : parseJson(cartItemsCookie);

  const dogList = await getDogs();

  const cartItemsWithQuantities = dogList.map((dog) => {
    const matchingDogsFromCookie = cartItemQuantities.find(
      (cart) => dog.id === cart.id,
    );
    return { ...dog, quantity: matchingDogsFromCookie?.quantity };
  });

  console.log('cartItemsWithQuantities', cartItemsWithQuantities);
  console.log('dogList', dogList);

  const cartItemsWithQuantityGreaterThanOne = cartItemsWithQuantities.filter(
    (dogInCart) => {
      return dogInCart.quantity >= 1;
    },
  );

  const cartTotalPrice = cartItemsWithQuantityGreaterThanOne.reduce(
    (sum, dog) => {
      const price = parsePrice(dog.price);
      const quantity = parseFloat(dog.quantity);

      console.log(
        `Dog ID: ${dog.id}, Parsed Price: ${price}, Parsed Quantity: ${quantity}`,
      );

      if (isNaN(price) || isNaN(quantity)) return sum;
      const itemTotal = price * quantity;
      return sum + itemTotal;
    },
    0,
  );
  return (
    <div>
      {cartItemsWithQuantityGreaterThanOne.map((dog) => {
        const price = parsePrice(dog.price);
        const quantity = parseFloat(dog.quantity);
        const subtotal =
          !isNaN(price) && !isNaN(quantity) ? price * quantity : 0;
        return (
          <div key={`dog-${dog.id}`}>
            <h3>{dog.name}</h3>
            <Image
              className="single-dog"
              src={dog.image}
              width={400}
              height={400}
              alt={dog.name}
            />
            <p className="">Quantity: {dog.quantity}</p>
            <p className="">Price: € {price.toFixed(2)}</p>
            <p className="">Subtotal Price: € {subtotal.toFixed(2)} </p>{' '}
            <RemoveButton id={dog.id} />
            <hr />
          </div>
        );
      })}
      <h2>Total Price: €{cartTotalPrice.toFixed(2)}</h2>

      <Link href="/checkout">Checkout</Link>
    </div>
  );
}
