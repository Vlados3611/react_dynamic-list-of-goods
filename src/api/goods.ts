import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll<T>(): Promise<T[]> {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = () => {
  return getAll<Good>()
    .then(goods => goods
      .sort((acc, curr) => acc.name.localeCompare(curr.name))
      .slice(0, 5)); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll<Good>()
    .then(goods => goods.filter(
      (good) => good.color === 'red',
    )); // get only red
};
