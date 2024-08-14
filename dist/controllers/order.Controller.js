"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const tsyringe_1 = require("tsyringe");
const order_Service_1 = require("../services/order.Service");
const orderService = tsyringe_1.container.resolve(order_Service_1.OrderService);
class OrderController {
    static getAllOrders(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield orderService.findAllOrders();
                res.status(200).json(orders);
            }
            catch (error) {
                res.status(500).json({ message: `Error fetching all orders: ${error.message}` });
            }
        });
    }
    static getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const orders = yield orderService.findOrdersByUserId(id);
                res.status(200).json(orders);
            }
            catch (error) {
                res.status(500).json({ message: `Error fetching order by ID: ${error.message}` });
            }
        });
    }
    static createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newOrder = yield orderService.createOrder(req.body);
                res.status(201).json({
                    message: 'Order created successfully',
                    order: newOrder
                });
            }
            catch (error) {
                res.status(500).json({ message: `Error creating order: ${error.message}` });
            }
        });
    }
    static updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const orderUpdates = req.body;
                const updatedOrder = yield orderService.updateOrderById(orderUpdates, id);
                res.status(200).json({
                    message: 'Order updated successfully',
                    order: updatedOrder
                });
            }
            catch (error) {
                res.status(500).json({ message: `Error updating order: ${error.message}` });
            }
        });
    }
    static deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield orderService.deleteOrderById(id);
                res.status(200).json({ message: 'Order deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: `Error deleting order: ${error.message}` });
            }
        });
    }
}
exports.OrderController = OrderController;
