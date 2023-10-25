import createRouter from "./router.js";
import createPage from "./page.js";

const container = document.querySelector("main");

const pages = createPage(container);

const router = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/list", pages.list)
  .addRoute("/list/:id", pages.detail)
  .setNotFound(pages.notFound)
  .start();
