import bcrypt from "bcrypt";
import { SignJWT } from "jose";

const saltRounds = 10;

export const encryptPassword = async (password) =>
  await bcrypt.hash(password, saltRounds);

export const decryptPassword = async (password, encryptedPassword) =>
  await bcrypt.compare(password, encryptedPassword);

export const jwtEncode = async ({ name, email, user_id, role }) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = await new SignJWT({ name: name, email, user_id, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret);
  return jwt;
};

export const filterArray = (items, searchKey, options) => {
  if (!items?.length) {
    return [];
  }
  return items.filter(filterObject(searchKey, options));
};

export const filterObject = (
  searchKey,
  { deep = false, ignoreCase = false } = {}
) => {
  return (item) => {
    if (!searchKey) {
      return true;
    }

    let reduceStr = Object.entries(item).reduce((result, [, value]) => {
      return !(value instanceof Object) ? (result += ` ${value}`) : result;
    }, "");

    if (deep) {
      reduceStr += extractNestedValues(item);
    }

    if (!ignoreCase) {
      searchKey = searchKey.toLowerCase();
      reduceStr = reduceStr.toLowerCase();
    }

    return reduceStr.includes(searchKey);
  };
};
