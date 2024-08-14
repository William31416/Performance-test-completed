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
exports.OrderRepository = void 0;
const order_1 = require("../models/order");
const tsyringe_1 = require("tsyringe");
let OrderRepository = class OrderRepository {
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield order_1.Order.create(order);
            }
            catch (error) {
                throw new Error(`Error creating order: ${error.message}`);
            }
        });
    }
    updateOrderById(orderUpdated, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield order_1.Order.update(orderUpdated, {
                    where: { id: id }
                });
            }
            catch (error) {
                throw new Error(`Error updating order by ID: ${error.message}`);
            }
        });
    }
    deleteOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield order_1.Order.destroy({ where: { id: id } });
            }
            catch (error) {
                throw new Error(`Error deleting order by ID: ${error.message}`);
            }
        });
    }
    findAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield order_1.Order.findAll();
            }
            catch (error) {
                throw new Error(`Error fetching all orders: ${error.message}`);
            }
        });
    }
    findOrdersByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield order_1.Order.findAll({ where: { userId: userId } });
            }
            catch (error) {
                throw new Error(`Error fetching orders by user ID: ${error.message}`);
            }
        });
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, tsyringe_1.injectable)()
], OrderRepository);
