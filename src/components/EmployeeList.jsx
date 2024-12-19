import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../store/employeeSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const {
    list: employees,
    loading,
    error,
  } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="text-center text-xl text-blue-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="text-center text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Employee List</h1>
      <div className="grid gap-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg">{employee.name}</h2>
            <p className="text-gray-600">{employee.email}</p>
            <p className="text-gray-500 text-sm">{employee.company.name}</p>
            <div className="mt-2 text-sm">
              <p>Phone: {employee.phone}</p>
              <p>Website: {employee.website}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
