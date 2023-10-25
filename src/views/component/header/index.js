import Controller from '../../../controller/index';
import logo from '../../../image/logo-image.png';
import { navigate } from '../../../router';

class Header extends Controller {
  template() {
    return `<img src="${logo}" alt="logo" data-link="logo"/>
            <hr/>
            <div>헤더 컴포넌트</div>
    `;
  }

  setEvent() {
    this.addEvent('click', '[data-link="logo"]', () => {
      this.goMain();
    });
  }

  goMain() {
    navigate('/');
  }
}

export default Header;
