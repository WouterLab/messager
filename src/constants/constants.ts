import { Page } from "#types/types";
import * as Pages from "../pages";

let pages: Page = {};

document.addEventListener("DOMContentLoaded", () => {
  pages = {
    login: Pages.LoginPage,
    reg: Pages.RegPage,
    chats: Pages.MainPage,
    chat: Pages.ChatPage,
    404: Pages.Page404,
    profile: Pages.ProfilePage,
  };
});

export { pages };
