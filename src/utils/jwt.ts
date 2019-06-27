const STORAGE_KEY = `${process.env.REACT_APP_MY_APP_ID}:jwt`;

export const setJWT = (jwt: string) => {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ jwt, exp: new Date().getTime() + 60 * 60 * 24 * 1000 })
  );
};

export const getJWT = (): string | null => {
  const str = window.localStorage.getItem(STORAGE_KEY);
  if (str) {
    try {
      const obj = JSON.parse(str);
      if (obj.exp - new Date().getTime() < 0) {
        window.localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return obj.jwt;
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }
  return null;
};
