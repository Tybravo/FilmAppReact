import { React } from 'react'
import { usestate } from 'react'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './router/routes.jsx'

const router = createBrowserRouter([...routes]);


function App() {

  return(
    <>
    <RouterProvider router={router}/>
    </>
  )

}

export default App


