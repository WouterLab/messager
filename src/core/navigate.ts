import { pages } from "#constants/constants";

export function navigate(page: string) {
  const app = document.getElementById("app");

  const Component = pages[page];
  const component = new Component();
  app?.append(component.getContent()!);
}
