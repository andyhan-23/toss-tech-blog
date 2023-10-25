import { initMocks } from './mock';
import { start } from './router';

const hasMocks = initMocks();

if (hasMocks) {
  start();
}

console.log('test');
