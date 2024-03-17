import { Context } from 'https://deno.land/x/oak/mod.ts';
import { users } from '../models/sampledata.ts';

export const basicAuthMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const authHeader = ctx.request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    ctx.response.status = 401;
    ctx.response.headers.set("WWW-Authenticate", 'Basic realm="Secure Area"');
    ctx.response.body = "Unauthorized";
    return;
  }

  const base64Credentials = authHeader.slice(6);
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(":");
  console.log(`${username} is trying to connect`);
  if (!validateCredentials(username, password)) {
    ctx.response.status = 401;
    ctx.response.body = {msg: "Invalid username or password"};
    return;
  }
  ctx.state.user = { username };
  await next();
}

const validateCredentials = (username: string, password: string) : boolean => {
  let result = false;
  users.forEach((element)=>{
    if(element.username=== username) {
      console.log('found username');
      result = (element.password === password);
    }
  })
  return result;
}