import Controller from '../../../controller';
import Article from '../../../views/component/article';
import { navigate } from '../../../router';
import { reverseList } from '../../../controller/main';
import { getMain } from '../../../model/main';

class List extends Controller {
  template() {
    return `<div class=list> </div>`;
  }

  async mounted() {
    const list = document.querySelector('.list');
    const getList = await reverseList();
    getList.forEach(detail => {
      const $detail = document.createElement('article');
      $detail.className = 'detail-wrap';
      $detail.dataset.detailId = detail.id;
      list.appendChild($detail);
      return new Article($detail, { detail });
    });
  }

  setEvent() {
    const { goDetailPage } = this;
    this.addEvent('click', '.list', e => {
      if (!e.target.closest('[data-detail-id]')) return;
      goDetailPage(e.target.closest('[data-detail-id').dataset.detailId);
    });
  }

  async goDetailPage(id) {
    const articles = await getMain();
    navigate(`/detail/${id}`, { detail: articles[id] });
    //console.log('detail', { detail: articles[id] });
  }
}
export default List;
