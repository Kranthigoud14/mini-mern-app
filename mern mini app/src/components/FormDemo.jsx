import { useForm } from "react-hook-form";

function FormDemo(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors)
    //form submit action
    const onFormSubmit=(obj)=>{
        console.log(obj);
    }
    return(
        <div>
        <div className="text-center text-5xl"  >Form Demo</div>
        <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <div className=" mb-3">
        <label htmlFor="username">username:</label>
        <input type="text" {...register("username",{
            required:"Username is required",minLength:4,maxLength:10,validate:(v)=>v.trim().length!=0 || "white space is not allowed"
        })}
         id="username" className="border w-full p-3"
        />
        {errors.username?.type==="required" &&  <p className=" text-red-500">{errors.username.message}</p>}
        {errors.username?.type==="minLength" && <p className=" text-red-500">Minimum length of characters of username is 4</p>}
        {errors.username?.type==="maxLength" && <p className=" text-red-500">Maximum length of characters of username is 10</p>}
        {errors.username?.type==="validate" && <p className="  text-red-500">{errors.username.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input type="email"{...register("email")} id="email" className="border w-full p-3" />
        </div>
        <div>
            <button type="submit" className="bg-amber-400 p-6 block mx-auto">Submit</button>
        </div>
        </form>
        </div>
    )
}
export default FormDemo;