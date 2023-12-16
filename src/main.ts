import Handlebars, { Template } from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";
import "./styles/styles.scss";

const app = document.getElementById("app");

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template<any>);
});

interface Page {
  [key: string]: [string, {}];
}

const pages: Page = {
  login: [Pages.LoginPage, {}],
  reg: [Pages.RegPage, {}],
  chats: [Pages.MainPage, {}],
  chat: [Pages.ChatPage, {}],
  404: [Pages.Page404, {}],
};

export const navigate = (page: string) => {
  const [source, context] = pages[page] || pages[""];
  const render = Handlebars.compile(source)(context);
  if (window.location.pathname !== "/" + page) {
    window.history.pushState({ page }, "", "/" + page);
  }

  if (app) {
    app.innerHTML = render;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const currentRoute = document.location.pathname.slice(1);

  if (currentRoute === "") navigate("login");
  else if (pages.hasOwnProperty(document.location.pathname.slice(1))) {
    navigate(currentRoute);
  } else navigate("404");
});

document.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as Element;
  const page = target.getAttribute("redirect");

  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopPropagation();
  }
});

const handlePopState = (event: PopStateEvent) => {
  const page = (event.state && (event.state as { page: string }).page) || "";
  navigate(page);
};

window.addEventListener("popstate", handlePopState);
