import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (plainPassword: string) => {
  return await bcrypt.hash(plainPassword, saltRounds);
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
