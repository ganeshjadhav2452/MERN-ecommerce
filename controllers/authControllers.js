
import { comparePassword, hashPssword } from '../helpers/authHelper.js';
import User from '../models/userModel.js'
import JWT from 'jsonwebtoken'
import { config } from 'dotenv';
config()

export const registerController = async (req, res) => {
    const { name, email, password, phone, address } = req.body;


    try {
        if (!name || !email || !password || !phone || !address) return res.json({
            message: 'please fill all required fields'
        })

        // geting user if exists 
        const existingUser = await User.findOne({ email: email })

        if (existingUser) return res.status(200).json({
            success: false,
            message: `User with Email: ${email} is already Registered Please login`
        })

        // register user
        const hashedPassword = await hashPssword(password)

        const user = await new User({
            name,
            email,
            phone,
            address,
            password: hashedPassword
        }).save()

        res.status(201).json({
            success: true,
            message: "User Registered successfully",
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                role: user.role,

            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in Registration"
        }),
            error

    }
}

export const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) return res.status(404).json({
            success: false,
            message: "Email Or Password Cannot Be Empty !",

        })

        // check user 
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({
            success: false,
            message: `Sorry user with email ${email} is not registered please Signup`
        })
        // comparing hashed password with plain password received from client
        const match = await comparePassword(password, user.password)

        if (!match) return res.status(200).json({
            success: false,
            message: 'Invalid password'
        })

        // leting user log in by generating json web token

        if (match) {
            const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRETE_KEY, { expiresIn: '7d' });

            res.status(200).json({
                success: true,
                message: "Login successfull",
                user: {
                    name: user.name,
                    email: user.email,
                    address: user.address,
                    phone: user.phone

                },
                token
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Error in Login",
            error
        })
    }
}