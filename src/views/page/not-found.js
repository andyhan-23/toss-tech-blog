import Controller from '../../controller';

class notFound extends Controller {
  template() {
    return `
        <div>페이지를 찾을 수 없습니다.</div>
        `;
  }
}

export default notFound;
