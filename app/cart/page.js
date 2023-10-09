import Link from 'next/link';
import { getDogs } from '../../database/dogs';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import RemoveButton from './RemoveButton';

function parsePrice(price) {
  if (typeof price === 'number') return price;
  return parseFloat(price.replace(/[^0-9.]/g, ''));
}

export default async function cart() {
  const dogCookie = getCookie('dogQuantity');
  const dogsQuantity = !dogCookie ? [] : parseJson(dogCookie);
  const dog = await getDogs();

  const dogsInCart = dog.map((dog) => {
    const matchingDogCookie = dogsQuantity.find(
      (dogQuantity) => dog.id === dogQuantity.id,
    );
    return { ...dog, quantity: matchingDogCookie?.quantity };
  });

  const dogsWithQuantity = dogsInCart.filter((dogInCart) => {
    return dogInCart.quantity >= 1;
  });

  return (
    <div>
      {dogsWithQuantity.map((dog) => {
        const price = parsePrice(dog.price);
        const quantity = parseFloat(dog.quantity);
        const subtotal =
          !isNaN(price) && !isNaN(quantity) ? price * quantity : 0;
        return (
          <div key={`dog-${dog.id}`}>
            <h3>{dog.name}</h3>
            <img
              src={dog.image}
              alt={dog.name}
              style={{ width: '100px', height: '100px' }}
            />
            <p>Quantity: {dog.quantity}</p>
            <p>Price: € {price.toFixed(2)}</p>
            <p>Subtotal Price: € {subtotal.toFixed(2)} </p>
            <hr />
          </div>
        );
      })}
      <h2>
        Total Price: €{' '}
        {dogsWithQuantity
          .reduce((sum, dog) => sum + parsePrice(dog.price) * dog.quantity, 0)
          .toFixed(2)}
      </h2>
      <RemoveButton dog={dog} />
      <Link href="/checkout">Checkout</Link>
    </div>
  );
}
