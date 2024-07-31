import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from "../components/Spinner.jsx"
import axios from "axios"
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BookTable from "../components/home/BookTable.jsx"
import BookCard from '../components/home/BookCard.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [homeType, setHomeType] = useState('table')
  const {logout, name} = useAuth()
  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }, [])
  return (
    <div className='p-4'>
      <div className='flex justify-center item-center'>
        <button className='text-white text-xl p-2 m-2 bg-sky-600 rounded-lg hover:shadow-lg hover:text-black' onClick={() => setHomeType('table')}>Table</button>
        <button className='text-white text-xl p-2 m-2 bg-sky-600 rounded-lg hover:shadow-lg hover:text-black' onClick={() => setHomeType('card')}>Card</button>
        <button className='flex-self justify-end text-white text-xl p-2 m-2 bg-red-600 rounded-lg hover:shadow-lg hover:text-black' onClick={logout}>Logout</button>
      </div>
      <div className='flex justify-between item-center'>
        <h1 className='my-8 text-3xl'>Books List</h1>
        <h1 className='my-8 text-3xl'>Hello {name}</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className='text-4xl text-sky-800 my-8' />
        </Link>
      </div>
      {loading ? (<Spinner />) : (
        homeType === 'table' ? (<BookTable books={books} />) : (<BookCard books={books} />)
      )}
    </div>
  )
}

export default Home