import { User } from "../models/user";
import { injectable } from "tsyringe";

@injectable()
export default class UserRepository{
    async createUser(user: Partial<User>){
        try {
            return await User.create(user);
        } catch (error: any) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async updateUserById(userUpdated: Partial<User>, id: number){
        try {
            return await User.update(userUpdated, {
                where: { id: id }
            });
        } catch (error: any) {
            throw new Error(`Error updating user by ID: ${error.message}`);
        }
    }

    async deleteUserById(id: number){
        try {
            await User.destroy({ where: { id: id } });
        } catch (error: any) {
            throw new Error(`Error deleting user by ID: ${error.message}`);
        }
    }

    async findAllUsers(){
        try {
            return await User.findAll();
        } catch (error: any) {
            throw new Error(`Error fetching all users: ${error.message}`);
        }
    }
}