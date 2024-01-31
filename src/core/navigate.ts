import * as Pages from "../pages";

const pages = {
  login: Pages.LoginPage,
  reg: Pages.RegPage,
  chats: Pages.MainPage,
  chat: Pages.ChatPage,
  404: Pages.Page404,
  profile: Pages.ProfilePage,
};

export function navigate(page: string) {
  const app = document.getElementById("app")!;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const Component = pages[page];
  const component = new Component();

  app.innerHTML = "";
  app.append(component.getContent()!);
}
