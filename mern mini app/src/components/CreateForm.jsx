import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateForm(){
    const [users,setUsers]=useState([])
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors)
    //form submit action
    const onFormSubmit=(obj)=>{
        console.log(obj);
        setUsers([...users,obj])
    }
    return(
        <div >
        <div className="text-center text-5xl"  >Create User Form</div>
        <form className="max-w-md mx-auto mt-10 " onSubmit={handleSubmit(onFormSubmit)}>
        <div className=" mb-3">
        <label htmlFor="FirstName">First Name:</label>
        <input type="text" {...register("FirstName",{
            required:"First Name  is required",minLength:4,maxLength:10,validate:(v)=>v.trim().length!=0 || "white space is not allowed"
        })}
         id="FirstName" className="border w-full p-3"
        />
        {errors.FirstName?.type==="required" &&  <p className=" text-red-500">{errors.username.message}</p>}
        {errors.FirstName?.type==="minLength" && <p className=" text-red-500">Minimum length of characters of username is 4</p>}
        {errors.FirstName?.type==="maxLength" && <p className=" text-red-500">Maximum length of characters of username is 10</p>}
        {errors.FirstName?.type==="validate" && <p className="  text-red-500">{errors.username.message}</p>}
        </div>
        <div className=" mb-3">
        <label htmlFor="LastName">Last Name:</label>
        <input type="text" {...register("LastName")}
         id="LastName" className="border w-full p-3"
        />
        </div>
        <div className="mb-3">
            <label htmlFor="dob">DOB:</label>
            <input type="date"{...register("dob",{required:"Date of birth is required"})} id="dob" className="border w-full p-3" />
            {errors.dob?.type==="required" && <p className="  text-red-500">{errors.dob.message}</p>}
        </div>
        <div>
            <button type="submit" className="bg-amber-400 p-6 block mx-auto">Add User</button>
        </div>
        </form>
        <div>
            <div className="text-center text-5xl p-6">List of Users</div>
            <table className="mx-auto w-72 border" >
                <thead>
                    <tr>
                    <th className="text-center border">FirstName</th>
                    <th className="text-center border">LastName</th>
                    <th className="text-center border">dob</th>
                    </tr>
                </thead>
                 <tbody className="border text-center">
                   {users.map((obj,index)=>{
                    return(
                    <tr key={index}>
                    <td className="border">{obj.FirstName}</td>
                     <td className="border">{obj.LastName}</td>
                     <td className="border">{obj.dob}</td>
                     </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>
        </div>

    )
}
export default CreateForm;