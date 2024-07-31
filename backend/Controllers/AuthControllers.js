import { Users } from "../models/userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "The Input Should Be Not Empty" })
        }
        const { username, email, password, confirmPassword } = req.body
        const user = await Users.findOne({ email })
        if (user) {
            return res.status(409).json({ message: "User Already Exist" });
        }
        if (password != confirmPassword) {
            return res.status(400).json({message: "Password And Confirm Password Not Equal"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Users.create(
            {
                ...req.body,
                password: hashedPassword
            }
        )
        res.status(200).json({ message: "Signup successfully", username: newUser.username })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "the input should be not empty" })
        }
        const { email, password } = req.body
        const user = await Users.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        const isVaildPassword = await bcrypt.compare(password, user.password)
        if (!isVaildPassword) {
            return res.status(401).json({ message: "email or password is wrong" })
        }
        const token = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN, { expiresIn: '15d' })
        res.status(200).json({ message: "login successfully", username: user.username, token })
    } catch (error) {

    }
}