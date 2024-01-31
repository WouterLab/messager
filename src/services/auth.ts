import AuthApi from "#api/auth";
import { CreateUser, LoginRequestData, UserDTO } from "#api/types";
import { router } from "src/main";
import { PagesUrls } from "#types/types";
import { apiHasError } from "#utils/apiHasError";
import { transformUser } from "#utils/apiTransformer";

const authApi = new AuthApi();

const getUser = async () => {
  const responseUser = await authApi.me();
  if (apiHasError(responseUser)) {
    throw Error(responseUser.reason);
  }

  return transformUser(responseUser as UserDTO);
};

const signin = async (data: LoginRequestData) => {
  const response = await authApi.login(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const me = await getUser();

  window.store.set({ user: me });
  router.go(PagesUrls.MainPage);
};

const signup = async (data: CreateUser) => {
  const response = await authApi.create(data);
  if (apiHasError(response)) {
    throw Error(response.reason);
  }

  const me = await getUser();
  window.store.set({ user: me });
  router.go(PagesUrls.MainPage);
};

const logout = async () => {
  await authApi.logout();
  window.store.set({ user: null, chats: [] });
  router.go(PagesUrls.LoginPage);
};

export { signin, signup, logout, getUser };
