import { genSalt, hash, compare } from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await compare(password, hashedPassword);
  return isMatch;
};
