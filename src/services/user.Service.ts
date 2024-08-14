import UserRepository from "../repositories/user.Repository";
import { inject, injectable } from "tsyringe";
import { User } from "../models/user";

@injectable()
export class UserService {
    constructor(
        @inject(UserRepository) private userRepository: UserRepository
    ) {}

    async createUser(user: Partial<User>) {
        try {
            return await this.userRepository.createUser(user);
        } catch (error: any) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async updateUserById(userUpdated: Partial<User>, id: number) {
        try {
            const [affectedCount] = await this.userRepository.updateUserById(userUpdated, id);
            if (affectedCount === 0) {
                throw new Error('No rows affected. User might not exist.');
            }
            return await this.userRepository.findAllUsers();
        } catch (error: any) {
            throw new Error(`Error updating user by ID: ${error.message}`);
        }
    }

    async deleteUserById(id: number) {
        try {
            await this.userRepository.deleteUserById(id);
            return { message: 'User deleted successfully.' };
        } catch (error: any) {
            throw new Error(`Error deleting user by ID: ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            return await this.userRepository.findAllUsers();
        } catch (error: any) {
            throw new Error(`Error fetching all users: ${error.message}`);
        }
    }
}
