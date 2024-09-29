import React, { useState } from 'react';
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Name = ({ name, logout }) => {
    const [showDiv, setShowDiv] = useState(false)

    const toggleShowDiv = () => {
        setShowDiv(!showDiv)
    }
    return (
        <>
            <div className='bg-white flex justify-start items-center w-[200px] m-7 rounded-3xl relative'>
                <div className='flex items-center w-full p-3'>
                    <VscAccount className='text-3xl mr-2 text-custom-red' />
                    <span className='flex-grow'>{name}</span>
                    <AiOutlineCaretDown className='text-base mt-1' onClick={toggleShowDiv} />
                </div>
                {showDiv ?
                    <div className='w-[98%] border-2 h-auto bg-white mt-[30%] z-50 rounded-lg ml-1 absolute top-0'>
                        <div className='p-1'>
                            <Link to="/myself">
                                <h1 className="pl-2 rounded-sm my-3 text-base py-1 m-1 hover:bg-gray-100 cursor-pointer">
                                    My Profile
                                </h1>
                            </Link>

                            <h1 className='px-4 py-2 rounded-md border border-neutral-300 bg-red-500 text-white text-center text-base cursor-pointer hover:-translate-y-1 transform transition duration-200 hover:shadow-md' onClick={logout}>Logout</h1>
                        </div>
                    </div>
                    :
                    <div className='hidden'></div>}
            </div>
        </>
    );
}

export default Name;
