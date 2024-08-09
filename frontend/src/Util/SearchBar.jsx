import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const handleSearch = async() =>{
        try{
            const response = await fetch(`http://localhost:5555/books/search?title=${encodeURIComponent(query)}`)
            const data = await response.json()
            console.log(data)
            if(data.b){
                navigate(`/books/details/${data.b._id}`)
            }
        }
        catch(error){
            console.log("error book searching: ", error)
        }
    }

    const handleKeyDown = (e) =>{
        if(e.key === 'Enter')
            handleSearch(e)
    }
    return (
        <>
            <div className='bg-white flex justify-start items-center w-[500px] m-7 rounded-3xl'>
                <div className='flex w-full p-3 '>
                    <FaSearch className='mt-1 text-custom-red' />
                    <input
                        type='text'
                        className='ml-2 outline-none w-full text-black placeholder:text-md placeholder:text-black'
                        placeholder='Type Something Here...'
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </>
    )
}

export default SearchBar