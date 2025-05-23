import { createHash } from "crypto";

export const getMd5Hash = (str: string): string => {
  const md5 = createHash("md5");
  md5.update(str.toLowerCase());

  return md5.digest("hex");
};
