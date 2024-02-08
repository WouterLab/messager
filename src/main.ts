import * as Components from "./components";
import * as Pages from "./pages";
import "./styles/styles.scss";
import { registerComponent } from "#core/registerComponent";
import { AppState, PagesUrls } from "#types/types";
import { Store } from "#core/Store/Store";
import { init } from "#services/init";
import Handlebars, { Template } from "handlebars";
import { Router } from "#core/Router/Router";

declare global {
  interface Window {
    store: Store<AppState>;
  }

  type Nullable<T> = T | null;
}

const initState: AppState = {
  error: null,
  user: null,
  isOpenDialogChat: false,
  chats: [],
};

window.store = new Store<AppState>(initState);

Object.entries(Components).forEach(([name, component]) => {
  if (typeof component === "string") {
    Handlebars.registerPartial(name, component as Template<any>);
  } else registerComponent(name, component);
});

Object.entries(Pages).forEach(([name, component]) => {
  registerComponent(name, component);
});

export const router = new Router("#app");

document.addEventListener("DOMContentLoaded", () => {
  router
    .use(PagesUrls.MainPage, Pages.MainPage)
    .use(PagesUrls.LoginPage, Pages.LoginPage)
    .use(PagesUrls.RegPage, Pages.RegPage)
    .use(PagesUrls.ChatPage, Pages.ChatPage)
    .use(PagesUrls.ProfilePage, Pages.ProfilePage)
    .use(PagesUrls.Page404, Pages.Page404)
    .start();
  init();
});
