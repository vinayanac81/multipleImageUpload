import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/connection.js";
import UserRoute from "./routes/userRoute.js"
dotenv.config();
const app = express();
const PORT = 2001;
app.use(express.json());
connect()
// app.use(express.urlencoded({ extended: false }));
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "http://localhost:5173" }));
app.get("/",(req,res)=>{
    console.log("DONE");   
})
app.use("/api", UserRoute);
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
