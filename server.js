import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
// configuring env file
dotenv.config()

// database config
connectDB()
//rest object
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.use('/api/v1/auth', authRoutes)





//port


app.listen(process.env.PORT, () => console.log(`server started on port ${process.env.PORT}`.bgBlack.yellow))