import { chatApi } from "#core/HTTPTransport/HTTPTransport";
import { APIError, ChatDTO, CreateChat } from "./types";

export class ChatApi {
  async create(data: CreateChat): Promise<void | APIError> {
    return chatApi.post<void>("/", { data });
  }

  async getChats(): Promise<ChatDTO[] | APIError> {
    return chatApi.get<ChatDTO[]>("");
  }
}
