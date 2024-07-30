import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = "/" }) => {
    return (
        <div className='flex'>
            <Link to={destination} className='bg-sky-800 text-white w-fit py-1 px-4 rounded-lg'>
                <BsArrowLeft  className='text-2xl'/>
            </Link>
        </div>
    )
}

export default BackButton