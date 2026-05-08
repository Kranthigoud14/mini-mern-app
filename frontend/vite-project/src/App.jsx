import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmp from './components/CreateEmp'
import ListofEmp from './components/ListofEmp'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'
function App() {
    const routerObj=createBrowserRouter([
        {
        path:"/",
        element:<RootLayout/>,
        children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:"create-emp",
            element:<CreateEmp/>
        },
         {
            path:"list",
            element:<ListofEmp/>
        },
        {
            path:"edit-emp",
            element:<EditEmployee/>
        },
        {
            path:"employee",
            element:<Employee/>
        }
         
        ]
        }

    ])
 
    return (
    <RouterProvider router={routerObj} />
  )


}

export default App
