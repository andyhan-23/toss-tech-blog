import Header from '../component/header';
import Banner from '../component/banner';
import Controller from '../../controller';
import Title from '../../views/component/title';
import Introduction from '../../views/component/introduction';

class Detail extends Controller {
  template() {
    return `
            <header class ="header"></header>
            <div>디테일 페이지</div>
            <main class="article">
                <article class="title"></article>
                <article class="introduction"></article>
            </main>
            <footer class="banner"></footer>
        `;
  }

  mounted() {
    const header = document.querySelector('.header');
    const title = document.querySelector('.title');
    const introduction = document.querySelector('.introduction');
    const banner = document.querySelector('.banner');
    new Header(header);
    new Title(title, this.props);
    new Introduction(introduction, this.props);
    new Banner(banner);
  }
}

export default Detail;
