'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="main">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dogs">Dogs</Link>
      <Link href="/contactUs">Contact Us</Link>

      <Link href="/cart">Shopping cart</Link>
    </div>
  );
}
