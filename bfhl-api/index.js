import express from  "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})