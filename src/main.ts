import Handlebars, { Template } from "handlebars";
import * as Components from "./components";
import "./styles/styles.scss";
import { navigate } from "#core/navigate";
import { pages } from "#constants/constants";

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component as Template<any>);
});

document.addEventListener("DOMContentLoaded", () => {
  const currentRoute = document.location.pathname.slice(1);

  if (currentRoute === "") navigate("login");
  else if (pages.hasOwnProperty(document.location.pathname.slice(1))) {
    navigate(currentRoute);
    if (currentRoute === "chat") {
      const chatWindow = <HTMLDivElement>document.getElementById("chat-window");
      chatWindow.scroll({ behavior: "smooth", top: chatWindow.scrollHeight });
    }
  } else navigate("404");
});

const handlePopState = (event: PopStateEvent) => {
  const page = (event.state && (event.state as { page: string }).page) || "";
  navigate(page);
};

window.addEventListener("popstate", handlePopState);
