import { cars } from "../models/sampledata.ts";
import { carSchema } from "../models/carSchema.ts";
import { validate } from "https://deno.land/x/validasaur/mod.ts";
import * as db from "../helpers/dbhelper.ts";

export const carValidation = async (ctx, next) => {
  const value = await ctx.request.body().value;
  const [isValid, errors] = await validate(value, carSchema);
  if(isValid)
    next();
  else {
    ctx.response.status = 406;
    ctx.response.body = {
      msg: errors
    }
  }
}

export const getAll = async (ctx, next) => {
  console.log('Return all cars');
  const car = await db.find("cars");  
  ctx.response.body = car;
}

export const getById = (ctx, next) => {
  console.log('Return one car');
  let id = ctx.params.id;
  if ((id < cars.length+1) && (id > 0)) {
    ctx.response.body = cars[id-1]
  } else {
    ctx.response.status = 404
  }
}

export const createItem = async (ctx, next) => {
  const body = ctx.request.body();
  const value = await body.value;
  console.log(`Got ${value}`)
  cars.push(value)
  ctx.response.status = 201
  ctx.response.body = value
}  

export const updateItem = (cnx, next) => {  
  //TODO: edit an article  
}  

export const deleteItem = (cnx, next) => {  
  //TODO: delete an article  
}  