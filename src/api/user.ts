import { userApi } from "#core/HTTPTransport/HTTPTransport";
import { APIError, UpdateInfo, UpdatePassword, UserDTO } from "./types";

export class UserApi {
  async update(data: UpdateInfo): Promise<UserDTO | APIError> {
    return userApi.put("/profile", { data });
  }

  async avatar(form: FormData): Promise<UserDTO | APIError> {
    return userApi.fileRequset("/profile/avatar", form);
  }

  async password(data: UpdatePassword): Promise<void | APIError> {
    return userApi.put("/password", { data });
  }
}
