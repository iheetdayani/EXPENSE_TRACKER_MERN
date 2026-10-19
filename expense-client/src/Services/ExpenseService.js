import axios from "axios";

const API_URL="http://localhost:5000/api/Expenses";
export const createExpense=async(Expense)=>{
  const response=await axios.post(API_URL,Expense);
  return response.data;
}
export const GetAllExpense=async()=>{
  const response=await axios.get(API_URL);
  return response.data;
}
export const GetAllExpenseByid=async(id)=>{
  const response=await axios.get(`${API_URL}/${id}`);
  return response.data;
}
export const DeleteExpense=async(id)=>{
  const response=await axios.delete(`${API_URL}/${id}`);
  return response.data;
}