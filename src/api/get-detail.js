import { data } from '../utils/get-data';
import { mockServer } from '../mock/mock-server';

export default function getDetail() {
  return mockServer('get', '/detail/:id', data('detail'), (req, data) => data[req.params.id]);
}
