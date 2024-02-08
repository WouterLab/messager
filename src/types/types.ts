export interface Page {
  [key: string]: any;
}

export enum PagesUrls {
  LoginPage = "login",
  RegPage = "reg",
  MainPage = "chats",
  ChatPage = "chat",
  Page404 = "404",
  ProfilePage = "profile",
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
  lastMessage: {
    message: string;
    time: string;
  };
  count: string;
  id: string;
};

export type ProfileProps = {
  image: string;
  name: string;
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

export type User = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  phone: string;
  email: string;
};

type LastMessage = {
  user: User;
  time: string;
  content: string;
};

export type Chat = {
  id: number;
  title: string;
  avatar: Nullable<string>;
  unreadCount: number;
  lastMessage: LastMessage | null;
};

export type AppState = {
  error: string | null;
  user: User | null;
  isOpenDialogChat: boolean;
  chats: Chat[];
};
