import { data } from '../utils/get-data';
import { mockServer } from '../mock/mock-server';

export default function getMain() {
  return mockServer('get', '/main', data('main'), (req, data) => data);
}
