import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from "../components/Spinner.jsx"
import axios from "axios"
import BookCard from '../components/home/BookCard.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import signupBg from "../assets/PhotoAuth/signupBg.png"
import logo from "../assets/PhotoAuth/logo.png"
import SearchBar from '../Util/SearchBar.jsx'
import Name from '../Util/Name.jsx'
import { AiFillHome, AiOutlineBarChart } from "react-icons/ai";
import { BsCursorFill } from "react-icons/bs";
import NewArrival from '../Util/NewArrival.jsx'
import { MdOutlineAddBox } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const { logout, name } = useAuth()
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
    <>
      <div className='w-screen h-screen bg-no-repeat bg-center bg-cover shadow-lg min-w-44' style={{ backgroundImage: `url(${signupBg})` }}>
        <div className='h-full w-full flex justify-center items-center' >
          <div className='bg-custom-gray h-[95%] w-[97%] shadow-xl rounded-lg relative '>
            <div className='rounded-lg flex flex-col absolute top-0 left-0 bg-white w-[17%] h-full justify-between'>
              <nav>
                <img src={logo} alt='book buddy logo' />
                <div className='mx-[30%]'>
                  <ul className='flex flex-col justify-center items-start text-gray-500 '>
                    <li className='flex text-xl cursor-pointer hover:text-black mb-4'><AiFillHome className='mr-2 mt-1 text-xl' /><a href='/'> Home</a></li>
                    <li className='flex text-xl cursor-pointer hover:text-black mb-4'><AiOutlineBarChart className='mr-2 mt-1 text-xl' /><a href='/myself'> My Shelf</a></li>
                    <li className='flex text-xl cursor-pointer hover:text-black mb-4'><BsCursorFill className='mr-2 mt-1 text-xl' /><a href='/contribute'> Contribute</a></li>
                  </ul>
                </div>
              </nav>
              <div className=' w-full h-auto ' >
                <div className='ml-[30%] h-auto flex flex-col items-start m-4 text-gray-500'>
                  <h1 className='cursor-pointer hover:text-black'>About</h1>
                  <h1 className='cursor-pointer hover:text-black'>Support</h1>
                  <h1 className='cursor-pointer hover:text-black'>Terms and Condition</h1>
                </div>
              </div>
            </div>
            <div className='ml-[17%] relative h-full overflow-auto'>
              <div className='flex sticky top-0 z-50 bg-custom-gray justify-evenly'>
                <SearchBar />
                <Name name={name} logout={logout} />
              </div>
              <div className=''>
                <div className='flex'>
                  <div className='flex justify-center items-center p-4 w-[35%] mt-[25px] mx-[44px] opacity-90 rounded-lg bg-gradient-to-br from-grad1 to-grad2 h-[233px]'>
                    <div className='flex flex-col m-4 justify-between'>
                      <h1 className='text-white text-2xl'>Today's Quote</h1>
                      <h3 className='text-white my-5'>“There is more treasure in books than in all the pirate's loot on Treasure Island.”</h3>
                      <h3 className='text-white self-end'>-Walt Disney</h3>
                    </div>
                  </div>
                  <div className='flex items-center justify-start w-[58%] mt-[25px] opacity-90 rounded-lg bg-gradient-to-br from-grad1 to-grad2 h-[233px]'>
                    <span className='text-white text-2xl translate-x-5 w-fit h-fit whitespace-nowrap -rotate-90  origin-top-left translate-y-20'>New Arrivals</span>
                    <div className='flex justify-around items-center w-[89.4%] h-[97%] rounded-tr-lg rounded-br-lg bg-white -ml-10 overflow-auto scrollbar-hidden'>
                      {loading ? <Spinner /> : <NewArrival />}
                    </div>
                  </div>
                </div>
                <h1 className='m-7 text-4xl text-custom-gray2 font-bold'>Good Morning</h1>
                <div className='flex justify-between'>
                  <h1 className='mx-7 text-xl text-custom-gray2'>Your Shelf</h1>
                  <Link to={"/books/create"}>
                    <MdOutlineAddBox className='text-4xl text-custom-red' />
                  </Link>
                </div>
                {loading ? (<Spinner />) : (
                  <BookCard books={books} />
                )} 
                <h1 className='mx-7 mt-4 text-xl text-custom-gray2'>Recommended for You</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


{/* <div className='p-4'>
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
    </div> */}