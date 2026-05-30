import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import geminiRouter from "./routes/generateRoute.js";
import pdfRouter from "./routes/pdfRouter.js";
import creditRouter from "./routes/creditsRoute.js";
import { stripeWebhook } from "./Controller/creditsController.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.post(
  "/api/credits/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);


app.use(cookieParser());
app.use(cors(
  {
    origin: 'https://notes-generator-client.onrender.com', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent with requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  }
));


app.use(express.json())

await connectDB();

app.get("/", (req, res) => {
  res.json("Hello world!!!");
});




app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", geminiRouter);
app.use("/api/pdf", pdfRouter);
app.use('/api/credit',creditRouter)

app.listen(PORT, () => console.log("Server running"));
