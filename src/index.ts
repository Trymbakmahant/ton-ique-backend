import express from "express";
import dotenv from "dotenv";
import Router from "./router/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", Router);
//ndexDomains()
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
