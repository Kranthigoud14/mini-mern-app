import React from 'react'
import { useLocation } from 'react-router-dom'
function Employee() {

    const {state}=useLocation();
  return (
    <div className="p-16 text-center text-3xl rounded-2xl border-2 bg-amber-50 shadow-2xl">
      <h1>Employee complete details</h1>
      <p>{state?.name}</p>
      <p>{state?.email}</p>
      <p>{state?.mobileno}</p>
      <p>{state?.designation}</p>
      <p>{state?.companyName}</p>
      
    </div>
  )
}

export default Employee
