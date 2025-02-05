import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

// Configuration Middlewares

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))  // Cross Origin Resource Sharing

app.use(express.json({
    limit: "16kb"
}))  // Accept Json Data

app.use(express.urlencoded({extended:true, limit:"16kb"})) // url path encode

app.use(express.static("public"))

app.use(cookieParser())

export default app
