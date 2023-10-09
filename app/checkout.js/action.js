'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const deleteCookie = async () => {
  await cookies().delete('cart');
  redirect('/thankyou');
};
