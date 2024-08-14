"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_Controller_1 = require("../controllers/user.Controller");
const routerUser = (0, express_1.Router)();
routerUser.post('/', user_Controller_1.UserController.createUser);
routerUser.get('/', user_Controller_1.UserController.getAllUsers);
routerUser.put('/:id', user_Controller_1.UserController.updateUser);
routerUser.delete('/:id', user_Controller_1.UserController.deleteUser);
exports.default = routerUser;
