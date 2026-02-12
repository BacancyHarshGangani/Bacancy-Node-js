import User from "../models/user.model";

export const getAllUsers = async () => {
  return await User.findAll({
    attributes: { exclude: ["password"] }, // 🔐 hide password
  });
};

export const getUserById = async (id: number) => {
  return await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
};
