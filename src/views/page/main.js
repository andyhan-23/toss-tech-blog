import Controller from '../../controller';
import Header from '../component/header';
import List from '../component/list';
import Banner from '../component/banner';

class Main extends Controller {
  template() {
    return `
        <header class="header"></header>
          <div>메인 페이지</div>
        <section class="list"></section>
        <footer class="banner"></footer>
        `;
  }

  mounted() {
    const header = document.querySelector('header');
    const list = document.querySelector('.list');
    const banner = document.querySelector('.banner');
    new Header(header);
    new List(list);
    new Banner(banner);
  }
}

export default Main;
