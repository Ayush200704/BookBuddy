import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  const handleDelete = () =>{
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false)
        navigate('/')
        enqueueSnackbar("Book deleted successfully", {variant : "success"})
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false)
        enqueueSnackbar("Error", {variant: 'error'})
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-4xl my-4'>Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col p-4 w-[600px] p-4 mx-auto border-2 border-sky-600 rounded-lg'>
          <span className='text-2xl mx-auto mb-4'>Are you sure you want to delete this book?</span>
          <button className='text-xl bg-sky-800 mb-2 text-white rounded-md' onClick={handleDelete}>Yes</button>
          <button className='text-xl bg-red-800 text-white rounded-md' onClick={()=>navigate('/')}>No</button>
        </div>
      )}
    </div>
  )
}

export default DeleteBook