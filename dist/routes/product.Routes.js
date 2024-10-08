"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_Controller_1 = require("../controllers/product.Controller");
const routerProduct = (0, express_1.Router)();
routerProduct.post('/', product_Controller_1.ProductController.createProduct);
routerProduct.get('/', product_Controller_1.ProductController.getAllProducts);
routerProduct.get('/:id', product_Controller_1.ProductController.getProductsByOrderId);
routerProduct.put('/:id', product_Controller_1.ProductController.updateProduct);
routerProduct.delete('/:id', product_Controller_1.ProductController.deleteProduct);
exports.default = routerProduct;
