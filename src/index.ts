import 'reflect-metadata';
import express from "express";
import router from "./routes/router";
import sequelize from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3010;
app.use(express.json());
app.use('/api', router);

const startServer = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Database connected!");
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
            
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

startServer();