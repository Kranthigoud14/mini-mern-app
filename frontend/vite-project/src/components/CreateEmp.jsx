import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    companyName: "",
  });
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("https://mini-mern-app-3.onrender.com/employee-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileno: formData.mobile,
          designation: formData.designation,
          companyName: formData.companyName,
        }),
      });

      if (res.status === 201) {
        navigate("/list");
      } else {
        const errorRes = await res.json();
        throw new Error(errorRes?.message || "Unable to create employee");
      }
    } catch (err) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="p-10 border-2 border-red-500 bg-white rounded-2xl shadow-2xl ">
      <h1 className="text-5xl text-center text-pink-700 ">Create New Employee</h1>
      <form className="max-w-md mx-auto mt-10" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          value={formData.designation}
          onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;
