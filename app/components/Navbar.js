'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="main">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dogs">Dogs</Link>
      <Link href="/contactUs">Contact Us</Link>

      <Link href="/cart">
        <Image
          src="/images/icons8-favorite-cart-100.png"
          alt=""
          width={50}
          height={20}
        />
      </Link>
    </div>
  );
}
