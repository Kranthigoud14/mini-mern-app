import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="p-5 bg-blue-200">
      <ul className="flex justify-end gap-5 text-2xl ">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>Home</NavLink>
        </li>
         <li>
          <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
          createEmp
          </NavLink>
        </li>
         <li>
          <NavLink to="list" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            Employees
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
