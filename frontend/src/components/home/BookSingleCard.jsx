import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle, BiShow } from "react-icons/bi"
import BookModel from "./BookModel.jsx"

const BookSingleCard = ({book}) => {
    const [showModel, setShowModel] = useState(false)
    return (
        <div className='border-2 border-red-300 rounded-lg p-4 m-4 relative hover:shadow-lg'>
            <h2 className='absolute top-1 right-2 bg-red-300 rounded-lg px-4 py-1 w-fit'>{book.publishYear}</h2>
            <h3 className='text-gray-500'>{book._id}</h3>
            <div className='flex justify-start item-center mt-4'>
                <PiBookOpenTextLight className='text-2xl mr-2 text-red-300 ' />
                <h2>{book.title}</h2>
            </div>
            <div className='flex justify-start item-center mt-2'>
                <BiUserCircle className='text-2xl mr-2 text-red-300 ' />
                <h2>{book.author}</h2>
            </div>
            <div className='flex justify-between item-center mt-4 p-4'>
                <BiShow 
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={()=>setShowModel(true)}
                />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-800 hover:text-black' />
                </Link>
            </div>
            {showModel &&
                <BookModel book={book} onClose={()=>setShowModel(false)}/>
            }
        </div>
    )
}

export default BookSingleCard