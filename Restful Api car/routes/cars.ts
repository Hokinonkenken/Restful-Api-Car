import { Router } from "https://deno.land/x/oak/mod.ts";
import * as carControllers from "../controllers/cars.ts";

const router = new Router({prefix: '/api/v1/cars'});

router.get('/', carControllers.getAll);
router.post('/', carControllers.carValidation, carControllers.createItem);
router.get('/:id([0-9]{1,})', carControllers.getById);
router.put('/:id([0-9]{1,})', carControllers.updateItem);
router.delete('/:id([0-9]{1,})', carControllers.deleteItem);

export const carRoutes = router;