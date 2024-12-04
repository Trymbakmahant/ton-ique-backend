import express from "express";
import dotenv from "dotenv";
import userRoutes from "./router/user";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
//ndexDomains()
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
