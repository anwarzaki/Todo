import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-md">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-blue-500 hover:text-blue-700">
                    Todo List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
