import { required, isNumber, isString } from "https://deno.land/x/validasaur/mod.ts";

export const carSchema= {
    name: [required, isString],
    brand: [required, isString],
    year: [isNumber],
};

export interface carCollectionSchema {
  name: string,
  brand: string,
  year: number  
};