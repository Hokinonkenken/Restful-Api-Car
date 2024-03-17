import { users } from "../models/sampledata.ts";
import { validate } from "https://deno.land/x/validasaur/mod.ts";

export const getAll = (ctx, next) => {
  console.log('Return all users');
  ctx.response.body = users;
}

export const auth = (ctx, next) => {
  console.log('Login');
  const user = ctx.state.user.username;  
  let body = {};
  users.forEach((element)=>{
    if(element.username=== user) {
      body = {
        msg: `Hello, ${element.firstname} ${element.lastname}`
      }
    }
  });
  ctx.response.body = body;
}

export const createItem = async (ctx, next) => {
  const body = ctx.request.body();
  const value = await body.value;
  console.log(`Got ${value}`);
  users.push(value);
  ctx.response.status = 201;
  ctx.response.body = value;
}  

export const updateItem = (ctx, next) => {  
  //TODO: edit an article  
}  

export const deleteItem = (ctx, next) => {  
  //TODO: delete an article  
}  