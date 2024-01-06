import { pages } from "#constants/constants";

export function navigate(page: string) {
  const app = document.getElementById("app");

  if (app) {
    let Component;
    if (page.includes("chat/")) Component = pages.chat;
    else Component = pages[page];
    const component = new Component();

    app.innerHTML = "";
    const content = component.getContent();
    if (content) {
      app.appendChild(content);
    }
    history.pushState({ page }, "", page);
  } else return;
}
