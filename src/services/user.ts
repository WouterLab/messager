import { UpdateInfo } from "#api/types";
import { UserApi } from "#api/user";
import { apiHasError } from "#utils/apiHasError";
import { getUser } from "./auth";

const userApi = new UserApi();

const update = async (data: UpdateInfo) => {
  const response = await userApi.update(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }
  const user = await getUser();

  window.store.set({ user });
};

const updateAvatar = async (form: FormData) => {
  const response = await userApi.avatar(form);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const user = await getUser();

  window.store.set({ user });
};

export { update, updateAvatar };
