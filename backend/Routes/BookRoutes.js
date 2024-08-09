import express from "express";
export const router = express.Router();
import { getAllApi, getSingleApi, postApi, putApi, deleteApi, searchBook } from "../Controllers/BookControllers.js";

router.get("/", getAllApi)
router.get('/search', searchBook)
router.get("/:id", getSingleApi)
router.post("/", postApi)
router.put("/:id", putApi)
router.delete("/:id", deleteApi)
