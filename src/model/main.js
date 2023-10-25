import { request } from '../utils/request';

export const getMain = async () => {
  const result = await request('/main');
  try {
    if (!result) throw new Error('no main data');
  } catch (error) {
    console.error(error);
  }
  return result.articles;
};
