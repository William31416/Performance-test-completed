import { container } from "tsyringe";
import { ProductService } from "../services/product.Service";
import { Request, Response } from "express";

const productService = container.resolve(ProductService);

export default class ProductController {

    static async getAllProducts(_: Request, res: Response) {
        try {
            const products = await productService.findAllProducts();
            res.json(products);
        } catch (error: any) {
            res.status(500).json({ message: `Error fetching all products: ${error.message}` });
        }
    }

    static async getProductsByOrderId(req: Request, res: Response) {
        try {
            const orderId: number = parseInt(req.params.orderId);
            const products = await productService.findProductsByOrderId(orderId);
            res.json(products);
        } catch (error: any) {
            res.status(500).json({ message: `Error fetching products by order ID: ${error.message}` });
        }
    }

    static async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await productService.createProduct(req.body);
            res.status(201).json({
                message: 'Product created successfully',
                product: newProduct
            });
        } catch (error: any) {
            res.status(500).json({ message: `Error creating product: ${error.message}` });
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const productUpdates = req.body;
            const updatedProduct = await productService.updateProductById(productUpdates, id);
            res.json({
                message: 'Product updated successfully',
                product: updatedProduct
            });
        } catch (error: any) {
            res.status(500).json({ message: `Error updating product: ${error.message}` });
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            await productService.deleteProductById(id);
            res.json({ message: 'Product deleted successfully' });
        } catch (error: any) {
            res.status(500).json({ message: `Error deleting product: ${error.message}` });
        }
    }
}