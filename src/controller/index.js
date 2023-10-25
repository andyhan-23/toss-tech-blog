class Controller {
  constructor(target, props) {
    this.target = target;
    this.props = props;

    this.setEvent();
    this.render();
  }
  mounted() {}

  template() {
    return ``;
  }

  setup() {} //컴포넌트 state 설정

  async render() {
    await this.setup();
    this.target.innerHTML = await this.template();
    this.mounted();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    this.target.addEventListener(eventType, event => {
      if (!event.target.closest(selector)) return false;
      return callback(event);
    });
  }
}

export default Controller;
