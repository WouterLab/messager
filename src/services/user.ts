import { UpdateInfo, UpdatePassword } from "#api/types";
import { UserApi } from "#api/user";
import { apiHasError } from "#utils/apiHasError";

const userApi = new UserApi();

const update = async (data: UpdateInfo) => {
  const response = await userApi.update(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  window.store.set({ user: response });
};

const updateAvatar = async (form: FormData) => {
  const response = await userApi.avatar(form);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  window.store.set({ user: response });
};

const changePassword = async (data: UpdatePassword) => {
  const response = await userApi.password(data);
  if (apiHasError(response)) {
    return response.reason;
  }
};

const findUser = async (login: string) => {
  const response = await userApi.find(login);
  if (apiHasError(response)) {
    return response.reason;
  }
  return response;
};

export { update, updateAvatar, changePassword, findUser };
