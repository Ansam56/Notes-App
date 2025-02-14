import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js";
import users from "./routes/users.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config({
  path: "./config/config.env",
});

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/notes", notes);
app.use("/api/v1/users", users);

// app.get("/api/v1/", (req, res) => {
//   res.send("get all notes");
// });

// app.get("/api/v1/:id", (req, res) => {
//   res.send("get single note");
// });

// app.post("/api/v1/", (req, res) => {
//   res.send("create new note");
// });

// app.put("/api/v1/:id", (req, res) => {
//   res.send("update note");
// });

// app.delete("/api/v1/:id", (req, res) => {
//   res.send("delete note");
// });

app.use("/api/v1/notes", notes);

app.listen(3000, () => {
  //   console.log("Server is running on port 3000");
  try {
    connectDB();
    console.log("Server is running on port 3000");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Exit with failure.
    process.exit(1);
  }
});
