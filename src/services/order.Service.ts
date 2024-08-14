import OrderRepository from "../repositories/order.Repository";
import { inject, injectable } from "tsyringe";
import { Order } from "../models/order";

@injectable()
export class OrderService {
    constructor(
        @inject(OrderRepository) private orderRepository: OrderRepository
    ) {}

    async createOrder(order: Partial<Order>) {
        try {
            return await this.orderRepository.createOrder(order);
        } catch (error: any) {
            throw new Error(`Error creating order: ${error.message}`);
        }
    }

    async updateOrderById(orderUpdated: Partial<Order>, id: number) {
        try {
            const affectedCount = await this.orderRepository.updateOrderById(orderUpdated, id);
            if (affectedCount[0] === 0) {
                throw new Error('No order found or no changes were made.');
            }
            return await this.orderRepository.findOrdersByUserId(id); // assuming you want to fetch the updated order
        } catch (error: any) {
            throw new Error(`Error updating order by ID: ${error.message}`);
        }
    }

    async deleteOrderById(id: number) {
        try {
            await this.orderRepository.deleteOrderById(id);
            return { message: 'Order deleted successfully' };
        } catch (error: any) {
            throw new Error(`Error deleting order by ID: ${error.message}`);
        }
    }

    async findAllOrders() {
        try {
            return await this.orderRepository.findAllOrders();
        } catch (error: any) {
            throw new Error(`Error fetching all orders: ${error.message}`);
        }
    }

    async findOrdersByUserId(userId: number) {
        try {
            return await this.orderRepository.findOrdersByUserId(userId);
        } catch (error: any) {
            throw new Error(`Error fetching orders by user ID: ${error.message}`);
        }
    }
}