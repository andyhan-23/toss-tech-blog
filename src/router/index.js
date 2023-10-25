import Main from '../views/page/main';
import Detail from '../views/page/detail';
import notFound from '../views/page/not-found';

const root = document.querySelector('#app');

const routes = [
  { path: '/', Controller: Main },
  { path: '/detail/:id', Controller: Detail },
];

const pathToRegex = path =>
  new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

const render = (path, param) => {
  const matchedRoutes = routes.map(route => {
    const isMatch = path.match(pathToRegex(route.path));
    //console.log('1', { route, isMatch });
    return { route, isMatch };
  });

  const match = matchedRoutes.find(
    matchedRoute => matchedRoute.isMatch !== null,
  );
  //console.log('2', match);
  //console.log('3', param);
  //console.log('4', match.route);
  return match ? new match.route.Controller(root, param) : new notFound(root);
};

export const navigate = (path, param) => {
  if (window.location.pathname !== path) {
    window.history.pushState({ id: 5 }, '', window.location.origin + path);
    render(path, param);
  }
};

export const start = () => {
  window.addEventListener('DOMContentLoaded', () => {
    render(window.location.pathname);
  });

  //console.log(window.location.pathname);
  window.addEventListener('popstate', event => {
    //앞 / 뒤 가능
    console.log('확인', event.state);
    render(window.location.pathname);
  });
};
