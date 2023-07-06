import express from "express";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Server
app.listen(3030, () => {
  console.log("Server is running on PORT 3000");
});
