import { HTTPTransport } from "#core/HTTPTransport/HTTPTransport";
import { APIError, UpdateInfo } from "./types";

const userApi = new HTTPTransport("/user/profile");

export class UserApi {
  async updateInfo(data: UpdateInfo): Promise<void | APIError> {
    return userApi.put<void>("/user/profile", { data });
  }
}
