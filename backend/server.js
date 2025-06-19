import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// app config
const app = express()
const PORT = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// API endpoint
app.use('/api/food' , foodRouter)
app.use('/images' , express.static('uploads'))
app.use('/api/user' , userRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)

app.get('/' , (req , res) => {
    res.send('API working')
})

app.listen(PORT , () => {
    console.log(`Server started on http://localhost:${PORT}`);
})


// mongodb+srv://Hariharan:admin@cluster0.hegdbkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//Pubilc Key //pk_test_51RbGHmFNQMpTWUXYbOlr0Q38xDbtEKpMgFYIiy46iMcV7RofZ7xFyvtVfRqO3EF7vQ57rdezAYIEDObjp91yQ01S00WWODH2wF