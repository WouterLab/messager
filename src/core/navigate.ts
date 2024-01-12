import { pages } from "#constants/constants";

export function navigate(page: string) {
  const app = document.getElementById("app");

  if (app) {
    const Component = pages[page];
    const component = new Component();

    app.innerHTML = "";
    const content = component.getContent();
    if (content) {
      app.appendChild(content);
    }
    const url = new URL(page, window.location.origin);

    if (history.state && history.state.page === page) {
      history.replaceState({ page }, "", url.href);
    } else {
      history.pushState({ page }, "", url.href);
    }
  } else return;
}
