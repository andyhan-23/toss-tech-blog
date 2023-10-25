import { axiosData } from '../utils/axios';

const request = path => {
  try {
    return axiosData(path).then(response => response.data);
  } catch (error) {
    if (import.meta.env.DEV) {
      //앱이 개발환경에서 실행중인지 판단
      console.error('error', error);
    }
    return null;
  }
};

export const getMain = async () => {
  const result = await request('/main');
  try {
    if (!result) throw new Error('no data');
  } catch (error) {
    console.error(error);
  }
  //console.log(result.articles);
  return result.articles;
};

export const getArray = async () => {
  let result = await setMain();
  result = Object.values(result).reverse();
  const arr = result.map(articles => articles);
  //console.log(arr);
  return arr;
};

export const setDetail = async id => {
  const result = await request(`/detail:1`);
  //console.log('2', result);
  return result;
};
// function Article() {
//   this.articleList = setArticleList();
//   this.getArticleList = async () => await this.articleList;
// }

// export default Article
