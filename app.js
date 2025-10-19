import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import profileRoutes from "./routes/profile.js";
import { logger } from './middleware/logger.js'

dotenv.config()

const app =express()
app.use(express.json())
app.use(logger)


app.use("/me", profileRoutes);

app.get("/", (req, res) => {
    res.send("Backend Wizards Stage 0 Assignment - Profile API")
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`);
})