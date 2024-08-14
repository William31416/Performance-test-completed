import { Router } from "express";
import OrderController from "../controllers/order.Controller";

export const routerOrder = Router();

routerOrder.post('/', OrderController.createOrder);
routerOrder.get('/', OrderController.getAllOrders);
routerOrder.get('/:id', OrderController.getOrderById);
routerOrder.put('/:id', OrderController.updateOrder);
routerOrder.delete('/:id', OrderController.deleteOrder);