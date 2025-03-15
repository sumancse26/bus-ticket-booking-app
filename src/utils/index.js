import bcrypt from "bcrypt";

const saltRounds = 10;

export const encryptPassword = async (password) =>
  awaitbcrypt.hash(password, saltRounds);

export const decryptPassword = async (password, encryptedPassword) =>
  await bcrypt.compare(password, encryptedPassword);
