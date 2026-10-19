import express from "express";
import { createExpense,DeleteExpense,updateExpense,GetAllExpenseById,GetAllExpense} from "../Controller/ExpenseContoller.js";
const router=express.Router();

router.get("/",GetAllExpense);
router.get("/:id",GetAllExpenseById);
router.post("/",createExpense);
router.put("/:id",updateExpense);
router.delete("/:id",DeleteExpense);

export default router;
