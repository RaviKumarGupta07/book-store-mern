const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")

const port = 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Sirf is domain ko allow karega
    // methods: ["GET", "POST"], // Allowed Methods
    credentials: true, // Cookies bhejne ki permission
  }));

const bookRoutes = require("./src/books/book.route")
const orderRoutes = require("./src/orders/order.route")
app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is Running");
  });
}

main()
  .then(()=>console.log("mongo db connected succesfully"))
  .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
