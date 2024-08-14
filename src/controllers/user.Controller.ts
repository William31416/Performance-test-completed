import { container } from "tsyringe";
import { UserService } from "../services/user.Service";
import { Request, Response } from "express";

const userService = container.resolve(UserService);

export default class UserController {

    static async createUser(req: Request, res: Response) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json({
                message: 'User created successfully',
                user: newUser
            });
        } catch (error: any) {
            res.status(500).json({ message: `Error creating user: ${error.message}` });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            const userUpdates = req.body;
            const updatedUsers = await userService.updateUserById(userUpdates, id);
            res.json({
                message: 'User updated successfully',
                users: updatedUsers
            });
        } catch (error: any) {
            res.status(500).json({ message: `Error updating user: ${error.message}` });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.params.id);
            await userService.deleteUserById(id);
            res.json({ message: 'User deleted successfully' });
        } catch (error: any) {
            res.status(500).json({ message: `Error deleting user: ${error.message}` });
        }
    }

    static async getAllUsers(_: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error: any) {
            res.status(500).json({ message: `Error fetching all users: ${error.message}` });
        }
    }
}