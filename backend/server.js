import exp from 'express'
import {connect} from 'mongoose'
import { employeeApp } from './API/Employeeapi.js';
import cors from 'cors'
import 'dotenv/config'

const app=exp()

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
    origin: [frontendUrl, "http://localhost:5173", "http://localhost:5174"]
}))
app.use(exp.json());
//forward req to userApp if path starts with /user-api
app.use('/employee-api', employeeApp);

const port = process.env.PORT || 4000;
const mongoUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/employeeDB";

async function connectDB(){
    if (!process.env.DB_URL) {
        console.warn("WARNING: DB_URL is not set. Defaulting to local MongoDB. This will likely fail in production.");
    }
    try{
        await connect(mongoUrl);
        console.log("Database connection successful to:", mongoUrl.split('@').pop()); // Log only the host part for security

        // start server only after successful DB connection
        app.listen(port, () => console.log(`Server running on port ${port}..`));
    }
    catch(err)
    {
        console.error("CRITICAL: Database connection failed!");
        console.error("Error details:", err.message);
        console.error("Full connection string attempted:", mongoUrl.replace(/:([^:@]{4})[^:@]*@/, ':****@')); // Mask password if present
        process.exit(1);
    }
}
connectDB();

//error handling in middleware
app.use((err,req,res,next)=>{
    res.json({message:"error occured",error:err.message})
    next();
})