import { UpdateInfo } from "#api/types";
import { update } from "#services/user";

export const updateUserInfo = async (data: UpdateInfo) => {
  await update(data);
};
