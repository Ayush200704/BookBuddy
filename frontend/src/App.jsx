import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import CreateBook from "./pages/CreateBook.jsx"
import DeleteBook from "./pages/DeleteBook.jsx"
import EditBook from "./pages/EditBook.jsx"
import ShowBook from "./pages/ShowBook.jsx"
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import { useAuth } from './context/AuthContext.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute Component={Home} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgetPassword' element={<ForgetPassword />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

const ProtectedRoute = ({ Component: Component }) => {
  const {isAuth} = useAuth()
  return isAuth ? <Component /> : <Login />
}

export default App