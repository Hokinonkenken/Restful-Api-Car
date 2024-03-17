import { Router } from "https://deno.land/x/oak/mod.ts";
import * as usersControllers from "../controllers/users.ts";
import { basicAuthMiddleware } from "../controllers/authMiddleware.ts";

const router = new Router({prefix: '/api/v1/users'});

router.get('/auth', basicAuthMiddleware, usersControllers.auth);

export const userRoutes = router;