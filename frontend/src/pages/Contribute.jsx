import React, { useState } from 'react';
import { ThumbsUp, Send, BookOpen } from 'lucide-react';

const Contribute = () => {
    const [books, setBooks] = useState([
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
        { id: 3, title: "1984", author: "George Orwell" },
    ]);

    const [comments, setComments] = useState([
        { id: 1, bookId: 1, user: "Om", text: "A classic that never gets old!", likes: 5 },
        { id: 2, bookId: 1, user: "Abhinav", text: "The prose is simply beautiful.", likes: 3 },
        { id: 3, bookId: 2, user: "Mayukh", text: "A powerful story about injustice.", likes: 7 },
        { id: 4, bookId: 3, user: "Agrim", text: "Orwell's vision is frighteningly relevant.", likes: 4 },
    ]);

    const [newComment, setNewComment] = useState("");
    const [selectedBook, setSelectedBook] = useState(1);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === "") return;
        const newCommentObj = {
            id: comments.length + 1,
            bookId: selectedBook,
            user: "You",
            text: newComment,
            likes: 0,
        };
        setComments([...comments, newCommentObj]);
        setNewComment("");
    };

    const handleLike = (commentId) => {
        setComments(comments.map(comment => 
            comment.id === commentId ? {...comment, likes: comment.likes + 1} : comment
        ));
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-[#FA7C54]">Contribute Your Thoughts</h1>
            
            <div className="mb-6">
                <label htmlFor="book-select" className="block mb-2 font-semibold">Select a Book:</label>
                <select 
                    id="book-select"
                    className="w-full p-2 border rounded"
                    value={selectedBook}
                    onChange={(e) => setSelectedBook(Number(e.target.value))}
                >
                    {books.map(book => (
                        <option key={book.id} value={book.id}>{book.title} by {book.author}</option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                {comments.filter(comment => comment.bookId === selectedBook).map(comment => (
                    <div key={comment.id} className="bg-white p-4 rounded-lg shadow mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">{comment.user}</span>
                            <button 
                                onClick={() => handleLike(comment.id)}
                                className="flex items-center text-[#FA7C54] hover:text-[#E86A42] transition-colors"
                            >
                                <ThumbsUp size={18} className="mr-1" />
                                {comment.likes}
                            </button>
                        </div>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="mt-6">
                <div className="flex">
                    <input 
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add your comment..."
                        className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-[#FA7C54]"
                    />
                    <button 
                        type="submit"
                        className="bg-[#FA7C54] text-white p-2 rounded-r hover:bg-[#E86A42] transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contribute;