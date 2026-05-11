import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  const deleteEmpById = async (id) => {
    const apiUrl = import.meta.env.VITE_API_URL || "https://mini-mern-app-3.onrender.com";
    let res = await axios.delete(`${apiUrl}/employee-api/employees/${id}`);
    if (res.status === 200) {
      getEmps(); 
    }
  };

  const getEmps = async () => {
    const apiUrl = import.meta.env.VITE_API_URL || "https://mini-mern-app-3.onrender.com";
    let res = await axios.get(`${apiUrl}/employee-api/employees`);
    if (res.status === 200) {
      let resObj = res.data;
      setEmps(resObj.payload);
    }
  };
//get all emps on component loading
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-5">
            <p>{empObj.name}</p>
            <p>{empObj.email}</p>
            <div className="flex justify-around mt-3">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-400 p-2 rounded-2xl text-white"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-500 p-2 rounded-2xl text-white"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmpById(empObj._id)}
                className="bg-red-500 p-2 rounded-2xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
