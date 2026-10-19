import mongoose from "mongoose";
const ExpenseSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  amount:{
    type:Number,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  },
  paymentMethod:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
},{
  timestamps:true
})
const Expenses=mongoose.model("Expenses",ExpenseSchema);

export default Expenses;