"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.ProductRepository = void 0;
const product_1 = require("../models/product");
const tsyringe_1 = require("tsyringe");
const order_1 = require("../models/order");
let ProductRepository = class ProductRepository {
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_1.Product.create(product);
            }
            catch (error) {
                throw new Error(`Error creating product: ${error.message}`);
            }
        });
    }
    updateProductById(productUpdated, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_1.Product.update(productUpdated, {
                    where: { id: id }
                });
            }
            catch (error) {
                throw new Error(`Error updating product by ID: ${error.message}`);
            }
        });
    }
    deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_1.Product.destroy({ where: { id: id } });
            }
            catch (error) {
                throw new Error(`Error deleting product by ID: ${error.message}`);
            }
        });
    }
    findAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_1.Product.findAll();
            }
            catch (error) {
                throw new Error(`Error fetching all products: ${error.message}`);
            }
        });
    }
    findProductsByOrderId(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_1.Product.findAll({
                    include: [{
                            model: order_1.Order,
                            where: { id: orderId }
                        }]
                });
            }
            catch (error) {
                throw new Error(`Error fetching products by order ID: ${error.message}`);
            }
        });
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, tsyringe_1.injectable)()
], ProductRepository);
