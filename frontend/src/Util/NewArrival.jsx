import React from 'react'
import imageData from './imageData.js'

const NewArrival = () => {

    return (
        <div className='flex'>
            {Object.keys(imageData).map(key => (
                <div key={key} className='w-[128px] h-[164px] mx-6 flex-shrink-0'>
                    <img src={imageData[key]} alt={`Book ${key}`} className='w-full h-full object-cover hover:shadow-2xl' />
                </div>
            ))}
        </div>
    )
}

export default NewArrival
