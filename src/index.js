import dotenv from "dotenv"
import connectDB from "./db/db.js";
import {app} from "./app.js"

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
   app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})

.catch((err)=>{
    console.log("Mongodb Connection failed !!",err)
})
































// (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (error) {
//         console.error("Error:" ,err)
//         throw err
//     }
// })