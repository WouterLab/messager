import { router } from "src/main";
import { getUser } from "./auth";
import { getChats } from "./chat";
import { PagesUrls } from "#types/types";

const init = async () => {
  let me = null;
  try {
    me = await getUser();
  } catch (error) {
    if (window.location.pathname === "/reg") {
      router.go(PagesUrls.RegPage);
      return;
    }

    router.go(PagesUrls.LoginPage);
    return;
  }

  const chats = await getChats();

  window.store.set({ user: me, chats });
  router.go(window.location.pathname.slice(1));
};

const initChatPage = async () => {
  const chats = await getChats();
  window.store.set({ chats });
};

export { init, initChatPage };
