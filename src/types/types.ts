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
  type: "image" | "text";
  route: "outgoing" | "incoming";
  time: string;
  image?: string;
  id: string;
};

export type ChatType = {
  img: string;
  title: string;
  message: string;
  time: string;
  count: string;
  id: string;
};

export type ProfileProps = {
  image: string;
  name: string;
  email: string;
  login: string;
  fname: string;
  lname: string;
  displayed: string;
  phone: string;
};
