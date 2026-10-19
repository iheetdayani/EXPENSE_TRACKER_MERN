import { useState } from "react";
import { createExpense } from "../Services/ExpenseService";
export default function ExpenseForm() {
  const [expense, SetExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    paymentMethod: "",
    description: ""
  })
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createExpense(expense);
      console.log(response);
      alert("Expense Added successFully");
      SetExpense({
        title: "",
        amount: "",
        category: "",
        date: "",
        paymentMethod: "",
        description: ""
      })
    } catch (error) {
      console.log(error);
      console.log("Error while add the Expense");
    }

  }
  const Handlechange = async (e) => {
    SetExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Expense Tracker App</a>
        </div>
      </nav>

      <div className="container mt-5 text-center">
        <div className="card card-header bg-primary text-white">
          <h4>Expense Tracker Application</h4>
        </div>
        <form onSubmit={HandleSubmit}>
          <div className="card shadow-lg p-4">
            <h3 className="mb-4">Add Expense</h3>

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter expense title"
                  value={expense.title}
                  onChange={Handlechange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Amount (₹)</label>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  placeholder="Enter amount"
                  value={expense.amount}
                  onChange={Handlechange}
                  min="0.01"
                  step="0.01"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  className="form-select"
                  value={expense.category}
                  onChange={Handlechange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                  <option value="Education">Education</option>
                  <option value="Health">Health</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={expense.date}
                  onChange={Handlechange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Payment Method</label>
                <select
                  name="paymentMethod"
                  className="form-select"
                  value={expense.paymentMethod}
                  onChange={Handlechange}
                  required
                >
                  <option value="">Select payment method</option>
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Card">Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>

              <div className="col-md-12">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Enter expense description"
                  rows="3"
                  value={expense.description}
                  onChange={Handlechange}
                  required
                />
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn-primary w-100">
                  Add Expense
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </>

  )
}
