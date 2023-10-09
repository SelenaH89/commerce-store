import DeleteCookie from './DeleteCookie';

export function generateMetadata() {
  return {
    title: 'Checkout | My E-Commerce App',
  };
}

export default function CheckoutPage() {
  // connect to the CheckoutButton ???

  return (
    <>
      {/* <div> {totalCost} </div> */}
      <fieldset>
        <legend>Shipping & Payment Information</legend>
        <br />
        <form>
          <ul>
            <li className="formElement">
              <label>
                {' '}
                First Name:
                <input
                  name="userFirstName"
                  data-test-id="checkout-first-name"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Last Name:
                <input
                  name="userLastName"
                  data-test-id="checkout-last-name"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Email:
                <input
                  type="email"
                  name="userEmail"
                  data-test-id="checkout-email"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Address:
                <input
                  name="userAddress"
                  data-test-id="checkout-address"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                City:
                <input name="userCity" data-test-id="checkout-city" required />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Postal Code:
                <input
                  type="number"
                  name="userPostalCode"
                  data-test-id="checkout-postal-code"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Country:
                <input
                  name="userCountry"
                  data-test-id="checkout-country"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Credit Card:
                <input
                  type="number"
                  name="userCreditCard"
                  data-test-id="checkout-credit-card"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Expiration Date:
                <input
                  type="month"
                  min="2023-10"
                  name="userExpirationDate"
                  data-test-id="checkout-expiration-date"
                  required
                />
              </label>
            </li>
            <li className="formElement">
              <label>
                {' '}
                Security Code:
                <input
                  type="number"
                  name="userSecurityCode"
                  data-test-id="checkout-security-code"
                  required
                />
              </label>
            </li>
          </ul>
          <DeleteCookie />
        </form>
      </fieldset>
    </>
  );
}
