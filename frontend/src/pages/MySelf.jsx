import React from 'react';
import { MapPin, Mail, Link as LinkIcon } from 'lucide-react';
import { VscAccount } from "react-icons/vsc";
import { useAuth } from '../context/AuthContext.jsx'

const MySelf = () => {
    const { logout, name } = useAuth()
    return (
        <div className="flex justify-center items-center min-h-screen bg-custom-red">
            <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg w-80 hover:shadow-xl transition-shadow duration-300">
                {/* Profile Picture */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md hover:scale-105 transition-transform duration-300">
                    <VscAccount className='text-3xl mr-2 text-custom-red w-full h-full object-cover' />
                    {/* <img 
                        src="/api/placeholder/150/150" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                    /> */}
                </div>
                
                {/* User Info */}
                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-indigo-500 font-medium">@{name}</p>
                    <p className="mt-3 text-gray-600 text-sm">Full-stack developer passionate about creating beautiful and functional web applications.</p>
                </div>
                
                {/* Additional Info */}
                <div className="mt-6 w-full space-y-3">
                    <div className="flex items-center text-gray-700">
                        <MapPin size={18} className="mr-2 text-indigo-500" />
                        <span className="text-sm">Lucknow, UP</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <Mail size={18} className="mr-2 text-indigo-500" />
                        <span className="text-sm">{name.toLowerCase()}@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <LinkIcon size={18} className="mr-2 text-indigo-500" />
                        <a href="#" className="text-sm text-indigo-500 hover:underline">{name.toLowerCase()}.com</a>
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 w-full flex space-x-4">
                    <button className="flex-1 bg-custom-red text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium">
                        Follow
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-medium">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MySelf;
