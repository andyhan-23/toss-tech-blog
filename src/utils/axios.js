//axios로 데이터를 서버로 보내주고 get방식으로 요청하는 것을 정의한 유틸 함수
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', //공부
});

export const axiosData = path => {
  try {
    return instance.get(path);
  } catch (error) {
    if (import.meta.env.DEV) {
      //앱이 개발환경에서 실행중인지 판단
      console.error('error', error);
    }
    return null;
  }
};
