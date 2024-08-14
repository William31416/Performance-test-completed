import { Order } from "../models/order";
import { injectable } from "tsyringe";

@injectable()
export default class OrderRepository{
    async createOrder(order: Partial<Order>){
        try {
            return await Order.create(order);
        } catch (error: any) {
            throw new Error(`Error creating order: ${error.message}`);
        }
    }

    async updateOrderById(orderUpdated: Partial<Order>, id: number){
        try {
            return await Order.update(orderUpdated, {
                where: { id: id }
            });
        } catch (error: any) {
            throw new Error(`Error updating order by ID: ${error.message}`);
        }
    }

    async deleteOrderById(id: number){
        try {
            await Order.destroy({ where: { id: id } });
        } catch (error: any) {
            throw new Error(`Error deleting order by ID: ${error.message}`);
        }
    }

    async findAllOrders(){
        try {
            return await Order.findAll();
        } catch (error: any) {
            throw new Error(`Error fetching all orders: ${error.message}`);
        }
    }

    async findOrdersByUserId(userId: number) {
        try {
            return await Order.findAll({ where: { userId: userId } });
        } catch (error: any) {
            throw new Error(`Error fetching orders by user ID: ${error.message}`);
        }
    }
}