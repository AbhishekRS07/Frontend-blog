import React from 'react'
import {Route ,Routes} from "react-router-dom"
import Blogs from '../Components/Blogs'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import AddBlog from '../Components/AddBlog'
import Home from '../Components/Home'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blogs/create' element={<AddBlog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes