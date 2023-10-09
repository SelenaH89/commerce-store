'use client';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="main">
      <Link href="/">
        <Image src="/images/logo.png" alt="icon" width={50} height={50} />
      </Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dogs">Dogs</Link>
      <Link href="/contactUs">Contact Us</Link>
      <Link href="/checkout">Checkout</Link>
      <Link href="/thankyou">Thank You</Link>
      <Link href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </div>
  );
}
