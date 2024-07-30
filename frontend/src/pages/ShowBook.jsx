import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowBook = () => {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl my-4 '>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col p-4 border-2 border-sky-600 w-fit p-4 rounded-lg mx-auto'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id:</span>
            <span className='text-xl mr-4 text-black-800'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title:</span>
            <span className='text-xl mr-4 text-black-800'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author:</span>
            <span className='text-xl mr-4 text-black-800'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year:</span>
            <span className='text-xl mr-4 text-black-800'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created At:</span>
            <span className='text-xl mr-4 text-black-800'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Updated At:</span>
            <span className='text-xl mr-4 text-black-800'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook