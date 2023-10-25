import Controller from '../../../controller';
import { getDetail } from '../../../model/detail';
import { getMain } from '../../../model/main';
//import mainJSON from '../../../../__fixtures__/main.json';
class Introduction extends Controller {
  async template() {
    const { detail } = this.props;
    const contents = await getDetail(detail.id);
    return `
       <div>${contents}</div>
        `;
  }

  async setup() {
    if (!this.props) {
      const id = window.location.pathname.split('/')[2];
      const articles = await getMain();
      this.props = {
        detail: articles[id],
      };
    }
  }
}
export default Introduction;
