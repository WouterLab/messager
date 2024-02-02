import { UpdateInfo } from "#api/types";
import { UserApi } from "#api/user";
import { apiHasError } from "#utils/apiHasError";
import { getUser } from "./auth";

const userApi = new UserApi();

const updateUser = async (data: UpdateInfo) => {
  const response = await userApi.updateInfo(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const me = await getUser();

  window.store.set({ user: me });
};

export { updateUser };
