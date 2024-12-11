import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import './index.css'
import Layout from "./Layout"
import Home from './Components/Home';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}>
      </Route>
    </Route>

  )
)

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
