import ProductRepository from "../repositories/product.Repository";
import { inject, injectable } from "tsyringe";
import { Product } from "../models/product";

@injectable()
export class ProductService {
    constructor(
        @inject(ProductRepository) private productRepository: ProductRepository
    ) {}

    async createProduct(product: Partial<Product>) {
        try {
            return await this.productRepository.createProduct(product);
        } catch (error: any) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    async updateProductById(productUpdated: Partial<Product>, id: number) {
        try {
            const [affectedCount] = await this.productRepository.updateProductById(productUpdated, id);
            if (affectedCount === 0) {
                throw new Error('No rows affected. Product might not exist.');
            }
            return await this.productRepository.findAllProducts();
        } catch (error: any) {
            throw new Error(`Error updating product by ID: ${error.message}`);
        }
    }

    async deleteProductById(id: number) {
        try {
            await this.productRepository.deleteProductById(id);
            return { message: 'Product deleted successfully.' };
        } catch (error: any) {
            throw new Error(`Error deleting product by ID: ${error.message}`);
        }
    }

    async findAllProducts() {
        try {
            return await this.productRepository.findAllProducts();
        } catch (error: any) {
            throw new Error(`Error fetching all products: ${error.message}`);
        }
    }

    async findProductsByOrderId(orderId: number) {
        try {
            return await this.productRepository.findProductsByOrderId(orderId);
        } catch (error: any) {
            throw new Error(`Error fetching products by order ID: ${error.message}`);
        }
    }
}