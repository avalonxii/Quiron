import bcrypt from "bcryptjs";
async function encryptPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
async function verifyPassword(password, dbPassword) {
  const isMatch = await bcrypt.compare(password, dbPassword);
  return isMatch;
}
export {
  encryptPassword as e,
  verifyPassword as v
};
