// import mongoose from "mongoose";
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );
// app.use(express.json());

// const mongoURI =
//   process.env.MONGODB_URI ||
//   `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// const Product = mongoose.model(
//   "Product",
//   new mongoose.Schema({
//     price: String,
//     name: String,
//   })
// );

// app.get("/product/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).send("Product not found");
//     }
//     res.json(product);
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     res.status(500).send("Error fetching product");
//   }
// });

// /
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
