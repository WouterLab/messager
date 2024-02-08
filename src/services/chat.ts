import { ChatApi } from "#api/chat";
import { apiHasError } from "#utils/apiHasError";
import { transformChats } from "#utils/apiTransformer";

const chatApi = new ChatApi();

const getChats = async () => {
  const responseChat = await chatApi.getChats();
  if (apiHasError(responseChat)) {
    throw Error(responseChat.reason);
  }

  return transformChats(responseChat);
};

const createChat = async (title: string) => {
  const response = await chatApi.create({ title });
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const responseChat = await chatApi.getChats();
  if (apiHasError(responseChat)) {
    throw Error(responseChat.reason);
  }

  const chats = await getChats();
  window.store.set({ chats });
};

const getChatData = async (id: number) => {
  const response = await chatApi.currentChat(id);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }
};

const addUser = async () => {
  const response = await chatApi.addUser();
  if (apiHasError(response)) {
    throw Error(response.reason);
  }
};

export { createChat, getChats, getChatData, addUser };
