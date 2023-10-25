import Controller from '../../../controller';

class Article extends Controller {
  template() {
    const { detail } = this.props;

    return `
        <img src="${detail.thumbnail_image}" width=100px height=100px/>
        <div class="artericle_summary">
          <span class="article_title">${detail.title}</span>
          <hr/>
          <span class="article_subtitle">${detail.summary}</span>
          <hr />
          <span class="article_created">${detail.created_date}</span>
          <hr />
          <span>${detail.id}</span>
        </div>
        `;
  }
}

export default Article;
