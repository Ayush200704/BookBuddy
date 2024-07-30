import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModel = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className='flex flex-col w-[600px] h-[400px] p-4 bg-white rounded-xl relative' >
                <AiOutlineClose onClick={onClose} className='text-3xl text-red-500 absolute top-7 right-7' />
                <h2 className='bg-red-300 w-fit py-1 px-4 rounded-lg'>{book.publishYear}</h2>
                <h4 className='text-gray-500 my-3'>{book._id}</h4>
                <div className='flex justify-start item-center'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='mx-2'>{book.title}</h2>
                </div>
                <div className='flex justify-start item-center mt-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='mx-2'>{book.author}</h2>
                </div>
                <h2 className='my-6'>Description - </h2>
                <span className='whitespace-normal break-words'>{book.description}</span>
            </div>
        </div>
    )
}

export default BookModel