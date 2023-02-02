import { Router } from "express";
import UsersController from "./controllers/UsersController";
import ShoppingCartsController from "./controllers/ShoppingCartsController";

const routes = Router();

routes.post("/shoppingcarts", ShoppingCartsController.create);
routes.get("/shoppingcarts", ShoppingCartsController.index);
routes.get("/shoppingcarts/:id", ShoppingCartsController.show);

routes.post("/users", UsersController.create);
routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);

export default routes;