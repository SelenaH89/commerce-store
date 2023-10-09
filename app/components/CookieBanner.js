'use client';

import { useEffect, useState } from 'react';
import { getCookie } from '../../public/util/cookies';
import { parseJson } from '../../public/util/json';
import {
  getLocalStorage,
  setLocalStorage,
} from '../../public/util/localStorage';
import style from '../components/CookieBanner.module.scss';

export default function CookieBanner() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');
    if (localStorageValue) {
      setAreCookiesAccepted(parseJson(localStorageValue));
    } else {
      setAreCookiesAccepted(false);
    }
  }, []);

  return (
    <div
      className={`${style.cookieBanner} ${
        areCookiesAccepted ? style.closed : style.open
      }`}
    >
      <div>Do you accept the use of cookies?</div>
      <button
        className={style.button}
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setAreCookiesAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
