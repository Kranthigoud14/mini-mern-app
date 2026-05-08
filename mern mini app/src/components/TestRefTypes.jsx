import { useState } from "react";
function TestRefTypes(){
    const [user,setUser]=useState({userName:"munna",age:18,city:"hyd"})
    const [marks,setMarks]=useState([10,20,30])
    //update user
    const updateUser=()=>{
        setUser({...user,userName:"Kranthi",age:19})
    }
    const updateMarks=()=>{
        setMarks([...marks,40])
    }

return(
        <div className=" text-center text-3xl m-10">
            <p>user:{user.userName}</p>
            <p>Age:{user.age}</p>
            <p>city:{user.city}</p>
           <button className="text-2xl bg-amber-200 p-3">
    {marks.map((mark, keyMarks) => (
        <p key={KeyMarks}>{mark}</p>   ))}
</button>
        </div>
);
}
export default TestRefTypes;