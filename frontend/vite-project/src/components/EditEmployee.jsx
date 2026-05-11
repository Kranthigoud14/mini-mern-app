import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
function EditEmployee() {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm();
 //get empObj from location hook
 const {state}=useLocation();
 const navigate = useNavigate();

    useEffect(()=>{
      if (!state) {
        navigate('/list');
        return;
      }
      setValue("name",state.name);
      setValue("email",state.email);
      setValue("mobileno",state.mobileno);
      setValue("designation",state.designation);
      setValue("companyName",state.companyName);
    }, [state, setValue, navigate])

    const saveModifiedEmp=async (modifiedEmp)=>{
      console.log(modifiedEmp)
      //make HTTP PUT req
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "https://mini-mern-app-3.onrender.com";
        const res = await axios.put(`${apiUrl}/employee-api/employees/${state._id}`, modifiedEmp);
        if (res.status === 200) {
          navigate('/list');
        } else {
          console.error('Error updating employee');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  return (
    <div className="bg-white rounded-2xl shadow-amber-100 border-2 p-10 border-amber-400">
      <h1 className="text-5xl text-center text-gray-600 ">Edit Employee</h1>
      <form onSubmit={handleSubmit(saveModifiedEmp)} className="max-w-md mx-auto mt-10">
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl border-green-800"
        />
        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl border-green-800"
        />
        <input
          type="text"
          placeholder="Enter mobile number"
          {...register("mobileno")}
          className="mb-3 border-2 p-3 w-full rounded-2xl border-green-800"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl border-green-800"
        />
        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl border-green-800"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default EditEmployee
