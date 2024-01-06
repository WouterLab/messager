import Block from "#core/Block/Block";

export interface Page {
  [key: string]: new () => Block;
}

export enum PagesUrls {
  LoginPage = "login",
  RegPage = "reg",
  MainPage = "chats",
  ChatPage = "chat",
  Page404 = "404",
  ProfilePage = "profile",
  EditInfoPage = "edit-info",
  EditPassPage = "edit-pass",
}

export type MessageType = {
  text: string;
  time: string;
};

export type ChatType = {
  img: string;
  title: string;
  message: string;
  time: string;
  count: string;
  id: string;
};
