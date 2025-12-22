import type { IUser } from "./user.interface.js";
import { UserModel } from "./user.model.js";


const createUserService = async (payLoad: IUser) => {
  const user = await UserModel.create(payLoad);
  return user;
}


export const UserService = {
  createUserService,
}