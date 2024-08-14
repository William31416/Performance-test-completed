import { Router } from "express";
import ProductController from "../controllers/product.Controller";

export const routerProduct = Router();

routerProduct.post('/', ProductController.createProduct);
routerProduct.get('/', ProductController.getAllProducts);
routerProduct.get('/:id', ProductController.getProductsByOrderId);
routerProduct.put('/:id', ProductController.updateProduct);
routerProduct.delete('/:id', ProductController.deleteProduct);