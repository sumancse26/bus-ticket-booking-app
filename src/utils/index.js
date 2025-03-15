import bcrypt from "bcrypt";
import { SignJWT } from "jose";

const saltRounds = 10;

export const encryptPassword = async (password) =>
  awaitbcrypt.hash(password, saltRounds);

export const decryptPassword = async (password, encryptedPassword) =>
  await bcrypt.compare(password, encryptedPassword);

export const jwtEncode = async ({ name, email }) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = await new SignJWT({ name: name, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);
  return jwt;
};

// export const jwtDecode = async (token) => {
//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   const { payload } = await jwtVerify(token, secret);
//   return payload;
// };
