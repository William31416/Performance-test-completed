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
exports.ProductController = void 0;
const tsyringe_1 = require("tsyringe");
const product_Service_1 = require("../services/product.Service");
const productService = tsyringe_1.container.resolve(product_Service_1.ProductService);
class ProductController {
    static getAllProducts(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService.findAllProducts();
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ message: `Error fetching all products: ${error.message}` });
            }
        });
    }
    static getProductsByOrderId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderId = parseInt(req.params.orderId);
                const products = yield productService.findProductsByOrderId(orderId);
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ message: `Error fetching products by order ID: ${error.message}` });
            }
        });
    }
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield productService.createProduct(req.body);
                res.status(201).json({
                    message: 'Product created successfully',
                    product: newProduct
                });
            }
            catch (error) {
                res.status(500).json({ message: `Error creating product: ${error.message}` });
            }
        });
    }
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const productUpdates = req.body;
                const updatedProduct = yield productService.updateProductById(productUpdates, id);
                res.json({
                    message: 'Product updated successfully',
                    product: updatedProduct
                });
            }
            catch (error) {
                res.status(500).json({ message: `Error updating product: ${error.message}` });
            }
        });
    }
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield productService.deleteProductById(id);
                res.json({ message: 'Product deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: `Error deleting product: ${error.message}` });
            }
        });
    }
}
exports.ProductController = ProductController;
