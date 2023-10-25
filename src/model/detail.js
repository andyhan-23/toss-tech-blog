import { request } from '../utils/request';

export const getDetail = async id => {
  const result = await request(`/detail/${id}`);
  try {
    if (!result) throw new Error('no detail data');
  } catch (error) {
    console.error(error);
  }
  //console.log('디테일 데이터', result);
  return result;
};
