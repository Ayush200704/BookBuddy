import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import {useSnackbar} from "notistack"

const CreateBook = () => {
  const [book, setBook] = useState(
    {
      title: "",
      author: "",
      publishYear: "",
      description: ""
    })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook((prev) => {
      return (
        {
          ...prev,
          [name]: value
        }
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post("http://localhost:5555/books", book)
      .then((response) => {
        console.log(response.data)
        setBook({title: "", author:"", publishYear: "", description: ""})
        navigate('/')
        enqueueSnackbar("Book Added Successfully", {variant: 'success'})
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar("Error", {variant: "error"})
        console.log(error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 border-sky-600 w-[600px] p-4 mx-auto rounded-lg'>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label className='text-xl text-gray-500 m-4'>Title: </label>
            <input 
              type='text' 
              className='border-2 border-sky-600 rounded-lg text-black w-full px-4 py-2' 
              name="title" 
              value={book.title} 
              onChange={handleChange} 
            />
          </div>
          <div className='my-4'>
            <label className='text-xl text-gray-500 m-4'>Author: </label>
            <input 
              type='text' 
              className='border-2 border-sky-600 rounded-lg text-black w-full px-4 py-2' 
              name='author' 
              value={book.author} 
              onChange={handleChange} 
            />
          </div>
          <div className='my-4'>
            <label className='text-xl text-gray-500 m-4'>Publish Year: </label>
            <input 
              type='Number' 
              className='border-2 border-sky-600 rounded-lg text-black w-full px-4 py-2' name='publishYear' 
              value={book.publishYear} 
              onChange={handleChange} 
            />
          </div>
          <div className='my-4'>
            <label className='text-xl text-gray-500 m-4'>Description: </label>
            <textarea 
              className='border-2 border-sky-600 rounded-lg text-black w-full px-4 py-2' name='description' 
              value={book.description} 
              onChange={handleChange} 
            >
            </textarea> 
          </div>
          <div className='flex justify-center my-4'>
            <input 
              type='submit' 
              className='bg-sky-800 text-xl text-white p-2 rounded-md' 
            />
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default CreateBook