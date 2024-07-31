import React, { useState } from 'react'
import signupBg from "../assets/PhotoAuth/signupBg.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useSnackbar} from "notistack"
import { useAuth } from '../context/AuthContext.jsx';

const Signup = () => {
    const [data, setData] = useState(
        {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    )
    const navigate = useNavigate()
    const {setName} = useAuth()
    const {enqueueSnackbar} = useSnackbar()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const handleChange = (e) => {
        setError("")
        const { name, value } = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        axios
            .post("http://localhost:5555/api/auth/signup", data)
            .then(res => {
                console.log(res.data.message)
                console.log(res.data.username)
                setName(res.data.username)
                navigate("/login")
                enqueueSnackbar("Successfully registered", {variant: 'success'})
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status >= 400) {
                        setError(err.response.data.message)
                        enqueueSnackbar(err.response.data.message, {variant: "error"})
                        return
                    }
                }
            })
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className='w-screen h-screen bg-no-repeat bg-center bg-cover shadow-lg' style={{ backgroundImage: `url(${signupBg})` }}>
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='flex flex-col w-[565px] h-[900px] bg-white rounded-lg shadow-2xl justify-center items-center'>
                        <h1 className='text-4xl font-oswald'>My <span className='text-4xl text-custom-red font-oswald'>Book</span></h1>
                        <span className='text-4xl text-custom-red font-oswald mb-7'>Buddy</span>
                        <span className='text-2xl mt-7 mb-14'>Registration</span>
                        <div className='w-[440px]'>
                            {error && <p className='text-red-500'>{error}</p>}
                            <form onSubmit={handleSubmit} className='flex flex-col items-start'>
                                <label htmlFor='username' className='text-xl'><span className='text-xl text-red-600'>*</span> Username</label>
                                <input
                                    type='text'
                                    name='username'
                                    className='border-2 border-black-600 w-full p-2 mb-2 rounded-lg hover:border-black'
                                    onChange={handleChange}
                                />
                                <label htmlFor='email' className='text-xl'><span className='text-xl text-red-600'>*</span> Email</label>
                                <input
                                    type='text'
                                    name='email'
                                    className='border-2 border-black-600 w-full p-2 mb-2 rounded-lg hover:border-black'
                                    onChange={handleChange}
                                />
                                <label htmlFor='password' className='text-xl'><span className='text-xl text-red-600'>*</span> Password</label>
                                <div className='relative w-full'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        className='border-2 border-black-600 w-full p-2 mb-2 rounded-lg hover:border-black'
                                        onChange={handleChange}
                                    />
                                    <span className='text-xl absolute top-3 right-4' onClick={toggleShowPassword}>
                                        {showPassword ? <FaEyeSlash className='text-custom-red' /> : <FaEye className='text-custom-red' />}
                                    </span>
                                </div>

                                <label htmlFor='confirmPassword' className='text-xl'><span className='text-xl text-red-600'>*</span> Confirm Password</label>
                                <div className='relative w-full'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='confirmPassword'
                                        className='border-2 border-black-600 w-full p-2 mb-2 rounded-lg hover:border-black'
                                        onChange={handleChange}
                                    />
                                    <span className='text-xl absolute top-3 right-4' onClick={toggleShowPassword}>
                                        {showPassword ? <FaEyeSlash className='text-custom-red' /> : <FaEye className='text-custom-red' />}
                                    </span>
                                </div>
                                <button type='submit' className='w-full border-2 my-[20px] p-2 rounded-lg text-xl text-white bg-custom-red hover:shadow-lg'>Register</button>
                                <span className='text-gray-500'>Already a user? <Link to="/login" className='underline'>Login now</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup