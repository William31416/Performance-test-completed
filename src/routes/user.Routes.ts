import { Router } from "express";
import UserController from "../controllers/user.Controller";

export const routerUser = Router();

routerUser.post('/', UserController.createUser);
routerUser.get('/', UserController.getAllUsers);
routerUser.put('/:id', UserController.updateUser);
routerUser.delete('/:id', UserController.deleteUser);