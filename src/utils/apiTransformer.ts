import { HOST } from "#constants/constants";
import { ChatDTO } from "#api/types";
import { Chat } from "#types/types";

const buildPathToResource = (resource: string | null) => {
  if (!resource) {
    return null;
  }

  return `${HOST}/resources/${resource}`;
};

export const transformChats = (data: ChatDTO[]): Chat[] => {
  return data.map((chat) => ({
    avatar: buildPathToResource(chat.avatar),
    id: chat.id,
    title: chat.title,
    unreadCount: chat.unread_count,
    lastMessage: chat.last_message
      ? {
          content: chat.last_message.content,
          time: chat.last_message.time,
          user: {
            id: chat.last_message.user.id,
            login: chat.last_message.user.login,
            first_name: chat.last_message.user.first_name,
            second_name: chat.last_message.user.second_name,
            display_name: chat.last_message.user.display_name,
            avatar: chat.last_message.user.avatar,
            phone: chat.last_message.user.phone,
            email: chat.last_message.user.email,
          },
        }
      : null,
  }));
};
