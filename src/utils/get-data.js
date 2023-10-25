//데이터를 조건에 따라 받아오는 util 함수
import mainJSON from '../../__fixtures__/main.json';
import detailJSON from '../../__fixtures__/detail.json';

export function data(data) {
  switch (data) {
    case 'main':
      return mainJSON;
    case 'detail':
      return detailJSON;
    default:
      return console.error('no data');
  }
}
