import { useState, useEffect } from "react";
import { GetAllExpense, DeleteExpense } from "../Services/ExpenseService";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [search, setsearch] = useState("");
  const loadExpense = async () => {
    try {
      const response = await GetAllExpense();
      setExpenses(response.data);
      console.log("Expense Fetched successFully");
    } catch (error) {
      console.log(error);
    }
  }
  const deleteExpense = async (id) => {
    try {
      await DeleteExpense(id);
      alert("Delete Expense successFully");
      loadExpense();
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }
  useEffect(() => {
    loadExpense();
  }, []);
  const filtererdexpense = expenses.filter((expense) => {
    return expense.title.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Search Expense</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row g-4">
          {filtererdexpense.map((expense) => (
            <div className="col-md-6 col-lg-4" key={expense._id}>
              <div className="card shadow-sm h-100">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">{expense.title}</h5>
                </div>

                <div className="card-body">
                  <h4 className="text-success mb-3">
                    ₹{expense.amount}
                  </h4>

                  <p>
                    <strong>Category:</strong> {expense.category}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(expense.date).toLocaleDateString("en-IN")}
                  </p>

                  <p>
                    <strong>Payment:</strong> {expense.paymentMethod}
                  </p>

                  <p className="mb-0">
                    <strong>Description:</strong> {expense.description}
                  </p>
                </div>

                <div className="card-footer bg-white">
                  <button className="btn btn-warning btn-sm me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm" onClick={() => { deleteExpense(expense._id) }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
