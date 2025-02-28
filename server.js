import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoutes.js";
import productRoute from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

connectdb();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
