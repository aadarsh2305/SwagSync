const User = require('../models/userModel');

const getAllUsers = async () => User.findAll();

const getUserById = async (id) => User.findByPk(id);

const createUser = async (data) => User.create(data);

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  return user.update(data);
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  return user.destroy();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
