import crypto from "crypto";

export const hashPassword = (password: string): string => {
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  console.log(hash);
  return hash;
};

export const comparePassword = (password: string, hash: string): boolean => {
  return hashPassword(password) === hash;
};
