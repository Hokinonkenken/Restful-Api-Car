import { required, isString } from "https://deno.land/x/validasaur/mod.ts";

export const userSchema= {
  username: [required, isString],
  password: [required, isString],
  firstname: [isString],
  lastname: [required, isString]
};

export interface userCollectionSchema {
  username: string,
  password: string,
  firstname: string,
  lastname: string
};