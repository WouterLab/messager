import { UpdateInfo } from "#api/types";
import { updateUser } from "#services/user";

export const updateUserInfo = async (data: UpdateInfo) => {
  await updateUser(data);
};
