import { useEffect, useState } from "react";

function APIDemo() {
    console.log("Api Demo rendered")
 let [users,setUsers]=useState([])
 let [loading,setLoading]=useState(false)
 let [error,setError]=useState(null)

  useEffect(() => {
    console.log("Use Effect executed");
    async function getData() {
        setLoading(true)
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersList = await res.json();
        setUsers(usersList);
      } catch (err) {
        console.log("err is", err);
        //update error state
        setError(err)
      }
      finally{
        setLoading(false)
      }
    }
    getData();
  }, []);
  console.log("API demo re-rendered");
  //making apireq need to be waited until initial rendering overs
  //intial render->display->API call->re render->display

  //deal with loading state
  if(loading)
  {
    return <p className="">Loading.....</p>
  }
  if(error!=null){
    return <p className="text-center text-red-500 text-5xl">{error.message}</p>
  }
  //deal with error state
  return (
    /* { <div className=" text-4xl">
                Count:{count}  </div>
              <div className=" p-2 text-black bg-green-400  rounded-sm  " onClick={changeCount}>Change Count</div> */
            <div className="text-center mt-6">
                <h1 className="text-8xl text-blue-400 p-6">List of users</h1>
                <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  
                    {users.map((userObj)=> (
                 <div key ={userObj.id} className=" border border-blue-400">
                    <p>{userObj.name}</p>
                    <p>{userObj.email}</p>
                    </div>
                    ))}

                </div>
            </div>
  )
}
export default APIDemo;