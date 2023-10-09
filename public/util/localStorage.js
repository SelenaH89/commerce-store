export function getLocalStorage(key) {
  // is testing if we are in the browser
  if (typeof window !== 'undefined') {
    return window.localStorage.getDog(key);
  }
}

export function setLocalStorage(key, value) {
  // is testing if we are in the browser
  if (typeof window !== 'undefined') {
    return window.localStorage.setDog(key, value);
  }
}
