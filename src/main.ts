import * as Components from "./components";
import * as Pages from "./pages";
import "./styles/styles.scss";
import { navigate } from "#core/navigate";
import { pages } from "#constants/constants";
import { registerComponent } from "#core/registerComponent";
import Handlebars, { Template } from "handlebars";
import { PagesUrls } from "#types/types";

Object.entries(Components).forEach(([name, component]) => {
  if (typeof component === "string") {
    Handlebars.registerPartial(name, component as Template<any>);
  } else registerComponent(name, component);
});

Object.entries(Pages).forEach(([name, component]) => {
  registerComponent(name, component);
});

const defaultRoot = PagesUrls.LoginPage;

document.addEventListener("DOMContentLoaded", () => {
  const currentRoute = document.location.pathname.slice(1);

  if (currentRoute === "") navigate(defaultRoot);
  else if (currentRoute === PagesUrls.ChatPage) {
    navigate(currentRoute);
    const chatWindow = <HTMLDivElement>document.getElementById("chat-window");
    chatWindow.scroll({ behavior: "smooth", top: chatWindow.scrollHeight });
  } else if (pages.hasOwnProperty(document.location.pathname.slice(1))) {
    navigate(currentRoute);
  } else navigate(PagesUrls.Page404);
});

const handlePopState = (event: PopStateEvent) => {
  const page = (event.state && (event.state as { page: string }).page) || "";
  navigate(page);
};

window.addEventListener("popstate", handlePopState);
