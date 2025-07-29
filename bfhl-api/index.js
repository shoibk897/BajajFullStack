import express from "express";
import cors from "cors";
import bfhlRoutes from "./routes/bfhlRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoutes);
app.get("/", (req, res) => {
  res.send("API is running. Please use POST /bfhl with JSON data.");
});

app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    message: "Route not found"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
