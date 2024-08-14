import { container } from "tsyringe";
import { OrderService } from "../services/order.Service";
import { Request, Response } from "express";

const orderService = container.resolve(OrderService);

export default class OrderController {

    static async getAllOrders(_: Request, res: Response) {
        try {
            const orders = await orderService.findAllOrders();
            res.status(200).json(orders);
        } catch (error: any) {
            res.status(500).json({ message: `Error fetching all orders: ${error.message}` });
        }
    }

    static async getOrderById(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const orders = await orderService.findOrdersByUserId(id);
            res.status(200).json(orders);
        } catch (error: any) {
            res.status(500).json({ message: `Error fetching order by ID: ${error.message}` });
        }
    }

    static async createOrder(req: Request, res: Response) {
        try {
            const newOrder = await orderService.createOrder(req.body);
            res.status(201).json({
                message: 'Order created successfully',
                order: newOrder
            });
        } catch (error: any) {
            res.status(500).json({ message: `Error creating order: ${error.message}` });
        }
    }

    static async updateOrder(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const orderUpdates = req.body;
            const updatedOrder = await orderService.updateOrderById(orderUpdates, id);
            res.status(200).json({
                message: 'Order updated successfully',
                order: updatedOrder
            });
        } catch (error: any) {
            res.status(500).json({ message: `Error updating order: ${error.message}` });
        }
    }

    static async deleteOrder(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            await orderService.deleteOrderById(id);
            res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error: any) {
            res.status(500).json({ message: `Error deleting order: ${error.message}` });
        }
    }
}