import { Book } from "../models/bookModel.js"
import { AsyncWrapper } from "../Middleware/AsyncWrapper.js"

export const getAllApi = AsyncWrapper(async (req, res) => {
    try {
        const book = await Book.find({})
        return res.status(200).json({
            count: book.length,
            data: book
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

export const getSingleApi = AsyncWrapper(async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

export const postApi = AsyncWrapper(async (req, res) => {
    if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear ||
        !req.body.description
    ) {
        return req.status(400).json({ message: "send all the required filed: title, author, publishYear, description" })
    }
    const book = await Book.create(req.body)
    res.status(200).json(book)
})

export const putApi = AsyncWrapper(async (req, res) => {
    const { id } = req.params;
    if (
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear ||
        !req.body.description
    ) {
        return res.status(400).json({ message: "provide all the requied fileds: title, author, publishYear, description " })
    }
    const book = await Book.findByIdAndUpdate(id, req.body)

    if (!book) {
        return res.status(404).json({ message: "book not found" })
    }
    else {
        return res.status(200).json({ message: "successfully updated book" })
    }
})

export const deleteApi = AsyncWrapper(async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id)
    if (!book) {
        return res.status(404).json({ message: "book not found" })
    }
    return res.status(200).json({ message: "successfully deleted" })
})

export const searchBook = AsyncWrapper(async(req, res)=>{
    const {title} = req.query;
    const b = await Book.findOne({title: new RegExp(title, 'i')})
    if(b){
        return res.json({b})
    } 
    else{
        return res.status(404).json({ message: 'Book not found' });
    }
})