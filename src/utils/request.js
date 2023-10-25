//axios로 받은 데이터를 바탕으로 후속 메서드를 이용해 처리를 해주는 유틸 함수
import { axiosData } from './axios';

export const request = path => {
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
