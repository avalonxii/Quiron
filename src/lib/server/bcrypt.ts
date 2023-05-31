import bcrypt from 'bcryptjs';

export async function encryptPassword(password:string) {

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
}

export async function verifyPassword(password:string, dbPassword:string) {
    const isMatch = await bcrypt.compare(password, dbPassword);
    return isMatch;
}