import { userApi } from "#core/HTTPTransport/HTTPTransport";
import { APIError, UpdateInfo } from "./types";

export class UserApi {
  async update(data: UpdateInfo): Promise<void | APIError> {
    return userApi.put<void>("/profile", { data });
  }

  async avatar(form: FormData): Promise<void | APIError> {
    return userApi.fileRequset("/profile/avatar", form);
  }
}
