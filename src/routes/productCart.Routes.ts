import { Router } from "express";
import CartController from "../controllers/productCart.Controller";

export const routerCart = Router();

routerCart.post('/add', CartController.addProductToCart);
routerCart.post('/remove', CartController.removeProductFromCart);
routerCart.post('/update', CartController.updateProductQuantityInCart);