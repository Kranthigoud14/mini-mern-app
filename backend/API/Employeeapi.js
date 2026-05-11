import express from "express";
import { Employeemodel } from "../Model/Employeemodel.js";

export const employeeApp = express.Router();

// Test route
employeeApp.get("/test", (req, res) => {
  res.send("Employee API working!");
});

// Create new employee
employeeApp.post("/employees", async (req, res) => {
  console.log("POST /employees - Received data:", req.body);
  try {
    const newEmployee = req.body;
    const newEmployeeDocument = new Employeemodel(newEmployee);
    console.log("Saving to database...");
    const result = await newEmployeeDocument.save();
    console.log("Save successful!");

    res.status(201).json({ message: "Employee created", payload: result });
  } catch (err) {
    console.error("Error creating employee:", err.message);
    res.status(400).json({ message: "Error creating employee", error: err.message });
  }
});

// Read all employees
employeeApp.get("/employees", async (req, res) => {
  const employeesList = await Employeemodel.find();
  res.status(200).json({ message: "employee", payload: employeesList });
});

// Get employee by ID
employeeApp.get("/employees/:id", async (req, res) => {
  const uid = req.params.id;
  const employeeObj = await Employeemodel.findById(uid);

  if (!employeeObj) {
    return res.status(400).json({ message: "employee not found" });
  }
  res.status(200).json({ message: "employee", payload: employeeObj });
});

// Update employee
employeeApp.put("/employees/:id", async (req, res) => {
  const uid = req.params.id;
  const modifiedEmp = req.body;

  const updateduser = await Employeemodel.findByIdAndUpdate(
    uid,
    { $set: { ...modifiedEmp } },
    { new: true, runValidators: true }
  );

  res.status(200).json({ message: "employee", payload: updateduser });
});

// Delete employee
employeeApp.delete("/employees/:id", async (req, res) => {
  const uid = req.params.id;
  const deletedUser = await Employeemodel.findByIdAndDelete(uid);
  res.status(200).json({ message: "employee deleted", payload: deletedUser });
});

