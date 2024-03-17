import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { carRoutes } from "./routes/cars.ts";
import { userRoutes } from "./routes/users.ts";

const port = Deno.env.get("PORT") | 10888;

const app = new Application();

const errorHandle = (ctx) => {
  switch(ctx.response.status) {
    case 404: 
      ctx.response.status = 404;
      ctx.response.body = {msg: "Resource not found"};
      break;
    case 405:
      ctx.response.status = 405;
      ctx.response.body = {msg: "Method not allowed"};
      break;
    default:
      ctx.response.status = 400;
      ctx.response.body = {msg: "Bad request"};
  }
}

app.use(carRoutes.routes()).use(carRoutes.allowedMethods());
app.use(userRoutes.routes()).use(carRoutes.allowedMethods());
app.use(errorHandle);

app.addEventListener('listen', () => {
  console.log(`Listening on port ${port}`);
})

await app.listen(port);
