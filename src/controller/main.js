import { getMain } from '../model/main';

export const reverseList = async () => {
  let list = await getMain();
  list = Object.values(list).reverse();
  return list;
};
