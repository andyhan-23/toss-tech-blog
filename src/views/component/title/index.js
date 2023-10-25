import Controller from '../../../controller';
//import mainJSON from '../../../../__fixtures__/main.json';
import { getMain } from '../../../model/main';
class Title extends Controller {
  template() {
    const { detail } = this.props;
    return `
        <img src="${detail.thumbnail_image}" witdh=100px height=100px/>
        <h1>${detail.title}</h1>
        <h3>토스 Frontend Developer</h3>
        <span>${detail.created_date}</span>
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

export default Title;
