import  Expenses from "../Models/Expense.js";
const createExpense=async(req,res)=>{
  try{
    const data=await Expenses.create(req.body);
    res.status(201).json({
      data:data,
      message:"Expense inserted successFully"
    })
  }catch(error){
    res.status(400).json({
      error:error.message
    })
  }
}
const GetAllExpense=async(req,res)=>{
  try{
    const data=await Expenses.find();
    res.status(200).json({
      data:data,
      message:"Expense Fetched successFully"
    })
  }catch(error){
    res.status(400).json({
      error:error.message
    })
  }
}
const GetAllExpenseById=async(req,res)=>{
  try{
    const data=await Expenses.findById(req.params.id);
    res.status(200).json({
      data:data,
      message:"Expense Fetched successFully By their Id"
    })
  }catch(error){
    res.status(400).json({
      error:error.message
    })
  }
}
const DeleteExpense=async(req,res)=>{
  try{
    const data=await Expenses.findByIdAndDelete(req.params.id);
    res.status(200).json({
      data:data,
      message:"Expense Deleted successFully By their Id"
    })
  }catch(error){
    res.status(400).json({
      error:error.message
    })
  }
}
const updateExpense=async(req,res)=>{
  try{
    const data=await Expenses.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({
      data:data,
      message:"Expense updated successFully By their Id"
    })
  }catch(error){
    res.status(400).json({
      error:error.message
    })
  }
}
export {createExpense,DeleteExpense,updateExpense,GetAllExpense,GetAllExpenseById};