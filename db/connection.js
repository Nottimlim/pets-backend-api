import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("disconnected", () => {
    console.log(chalk.bold("Disconnected from MongoDB"));
});

mongoose.connection.on("error", (err) => {
    console.log(chalk.red("Error connecting to MongoDB:"), err);
});

export default mongoose.connection;