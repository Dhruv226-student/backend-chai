import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
app.use(express.json({limit:"20kb"}))
app.use(cors({
    origin:process.env.CORSORIGIN,
    credentials:true
}))
app.use(express.urlencoded({extended: true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())



export {app}