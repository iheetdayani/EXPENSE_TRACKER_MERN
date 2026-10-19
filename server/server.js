import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import ConnectDb from "./Config/db.js";
import ExpenseRoutes from "./Routes/ExpenseRoutes.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api/Expenses",ExpenseRoutes);
ConnectDb();
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`);
})
