import React, { useState, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [book, setBook] = useState(
    {
      title: "",
      author: "",
      publishYear: "",
      description: ""
    })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  useEffect(()=>{
    setLoading(true)
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response)=>{
        setBook({
          title: response.data.title,
          author: response.data.author,
          publishYear: response.data.publishYear,
          description: response.data.description
        })
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error);
        alert("some error happened")
        setLoading(false)
      })
  }, [])

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
      .put(`http://localhost:5555/books/${id}`, book)
      .then((response) => {
        console.log(response.data)
        setBook({title: "", author:"", publishYear: "", description: ""})
        navigate('/')
        enqueueSnackbar("Book Edited successfully", {variant : "success"})
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar("Error", {variant: 'error'})
        console.log(error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl my-4'>Edit Book</h1>
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

export default EditBook