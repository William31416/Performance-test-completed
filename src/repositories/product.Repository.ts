import { Product } from "../models/product";
import { injectable } from "tsyringe";
import { Order } from "../models/order";

@injectable()
export default class ProductRepository {
    async createProduct(product: Partial<Product>) {
        try {
            return await Product.create(product);
        } catch (error: any) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    async updateProductById(productUpdated: Partial<Product>, id: number) {
        try {
            return await Product.update(productUpdated, {
                where: { id: id }
            });
        } catch (error: any) {
            throw new Error(`Error updating product by ID: ${error.message}`);
        }
    }

    async deleteProductById(id: number) {
        try {
            await Product.destroy({ where: { id: id } });
        } catch (error: any) {
            throw new Error(`Error deleting product by ID: ${error.message}`);
        }
    }

    async findAllProducts() {
        try {
            return await Product.findAll();
        } catch (error: any) {
            throw new Error(`Error fetching all products: ${error.message}`);
        }
    }

    async findProductsByOrderId(orderId: number) {
        try {
            return await Product.findAll({
                include: [{
                    model: Order,
                    where: { id: orderId }
                }]
            });
        } catch (error: any) {
            throw new Error(`Error fetching products by order ID: ${error.message}`);
        }
    }
}