"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ProductService = void 0;
const product_Repository_1 = require("../repositories/product.Repository");
const tsyringe_1 = require("tsyringe");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productRepository.createProduct(product);
            }
            catch (error) {
                throw new Error(`Error creating product: ${error.message}`);
            }
        });
    }
    updateProductById(productUpdated, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [affectedCount] = yield this.productRepository.updateProductById(productUpdated, id);
                if (affectedCount === 0) {
                    throw new Error('No rows affected. Product might not exist.');
                }
                return yield this.productRepository.findAllProducts();
            }
            catch (error) {
                throw new Error(`Error updating product by ID: ${error.message}`);
            }
        });
    }
    deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.productRepository.deleteProductById(id);
                return { message: 'Product deleted successfully.' };
            }
            catch (error) {
                throw new Error(`Error deleting product by ID: ${error.message}`);
            }
        });
    }
    findAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productRepository.findAllProducts();
            }
            catch (error) {
                throw new Error(`Error fetching all products: ${error.message}`);
            }
        });
    }
    findProductsByOrderId(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productRepository.findProductsByOrderId(orderId);
            }
            catch (error) {
                throw new Error(`Error fetching products by order ID: ${error.message}`);
            }
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(product_Repository_1.ProductRepository)),
    __metadata("design:paramtypes", [product_Repository_1.ProductRepository])
], ProductService);
