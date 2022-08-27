import { IUserListOne } from "../interfaces/user";
import { AppDataSource } from "../data-source";

import { User } from "../entities/user.entity";

const userListOneService = async ({ id }: IUserListOne) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((u) => u.id === id);

  return account;
};

export default userListOneService;
