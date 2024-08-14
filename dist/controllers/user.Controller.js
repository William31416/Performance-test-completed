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
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const user_Service_1 = require("../services/user.Service");
const userService = tsyringe_1.container.resolve(user_Service_1.UserService);
class UserController {
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield userService.createUser(req.body);
                res.status(201).json({
                    message: 'User created successfully',
                    user: newUser
                });
            }
            catch (error) {
                res.status(500).json({ message: `Error creating user: ${error.message}` });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const userUpdates = req.body;
                const updatedUsers = yield userService.updateUserById(userUpdates, id);
                res.json({
                    message: 'User updated successfully',
                    users: updatedUsers
                });
            }
            catch (error) {
                res.status(500).json({ message: `Error updating user: ${error.message}` });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield userService.deleteUserById(id);
                res.json({ message: 'User deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: `Error deleting user: ${error.message}` });
            }
        });
    }
    static getAllUsers(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService.getAllUsers();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ message: `Error fetching all users: ${error.message}` });
            }
        });
    }
}
exports.UserController = UserController;
