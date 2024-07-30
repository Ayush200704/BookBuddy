import express from "express";
export const router = express.Router();
import { getAllApi, getSingleApi, postApi, putApi, deleteApi } from "../Controllers/BookControllers.js";

router.get("/", getAllApi)
router.get("/:id", getSingleApi)
router.post("/", postApi)
router.put("/:id", putApi)
router.delete("/:id", deleteApi)



















// router.get("/", async (req, res) => {
//     try {
//         const book = await Book.find({})
//         return res.status(200).json({
//             count: book.length,
//             data: book
//         })
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })

// router.get("/:id", async (req, res) => {
//     try {
//         const { id } = req.params
//         const book = await Book.findById(id)
//         res.status(200).json(book)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })

// router.post("/", async (req, res) => {
//     try {
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishYear||
//             !req.body.description 
//         ) {
//             return res.status(400).json({ message: "send all the required filed: title, author, publishYear, description" })
//         }
//         const book = await Book.create(req.body)
//         res.status(200).json(book)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })

// router.put("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishYear||
//             !req.body.description 
//         ) {
//             return res.status(400).json({ message: "provide all the requied fileds: title, author, publishYear, description " })
//         }
//         const book = await Book.findByIdAndUpdate(id, req.body)

//         if (!book) {
//             return res.status(404).json({ message: "book not found" })
//         }
//         else {
//             return res.status(200).json({ message: "successfully updated book" })
//         }
//     } catch (error) {
//         console.timeLog(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })

// router.delete("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const book = await Book.findByIdAndDelete(id)
//         if (!book) {
//             return res.status(404).json({ message: "book not found" })
//         }
//         return res.status(200).json({ message: "successfully deleted" })
//     } catch (error) {
//         console.timeLog(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })
