import { chatApi } from "#core/HTTPTransport/HTTPTransport";
import { APIError, ChatDTO, CreateChat } from "./types";

export class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post<void>("/", { data });
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get<ChatDTO[]>("");
  }

  async currentChat(id: number): Promise<ChatDTO | APIError> {
    return chatApi.get<ChatDTO>(`/${id}/users`);
  }

  async addUser(): Promise<void | APIError> {
    return chatApi.get<void>(`/users`);
  }
}
