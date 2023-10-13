'use client';

import 'bulma/css/bulma.css';
import React, { useRef } from 'react'; // Add useRef
import { deleteCookies } from './action';

export default function Form() {
  const formRef = useRef(null); // Create a reference to the form

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Check if all required fields in the form are filled out
    if (formRef.current && !formRef.current.checkValidity()) {
      alert('Please fill out the form!');
      return;
    }

    await deleteCookies();

    // Use currentTarget to get the element that the event listener was attached to
    if (event.currentTarget.form) {
      event.currentTarget.form.submit();
    }
  };
  return (
    <div className="container">
      <form action="/order" ref={formRef}>
        <div className="field">
          <input
            className="input"
            placeholder="first name"
            data-test-id="checkout-first-name"
            required
          />
          <input
            className="input"
            placeholder="last name"
            data-test-id="checkout-last-name"
            required
          />
          <input
            className="input"
            type="email"
            placeholder="e-mail"
            data-test-id="checkout-email"
            required
          />
          <input
            className="input"
            placeholder="address"
            data-test-id="checkout-address"
            required
          />
          <input
            className="input"
            placeholder="city"
            data-test-id="checkout-city"
            required
          />
          <input
            className="input"
            type="number"
            placeholder="Postal Code"
            data-test-id="checkout-postal-code"
            maxLength={6}
            required
          />
          <input
            className="input"
            placeholder="country"
            data-test-id="checkout-country"
            required
          />
        </div>
        <input
          className="input"
          placeholder="credit card"
          data-test-id="checkout-expiration-date"
          type="number"
          required
        />
        <input
          className="input"
          type="date"
          placeholder="expiration date"
          data-test-id="checkout-credit-card"
          required
        />
        <input
          className="input"
          placeholder="cvc"
          data-test-id="checkout-security-code"
          type="number"
          maxLength={3}
          required
        />
        <button
          className="button is-primary"
          data-test-id="checkout-confirm-order"
          onClick={handleSubmit}
        >
          order now
        </button>
      </form>
    </div>
  );
}
