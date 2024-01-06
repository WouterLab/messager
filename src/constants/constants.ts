import Block from "#core/Block/Block";
import * as Pages from "../pages";

interface Page {
  [key: string]: new () => Block;
}

export const pages: Page = {
  login: Pages.LoginPage,
  reg: Pages.RegPage,
  chats: Pages.MainPage,
  chat: Pages.ChatPage,
  404: Pages.Page404,
  profile: Pages.ProfilePage,
  "edit-info": Pages.EditInfoPage,
  "edit-pass": Pages.EditPassPage,
};
