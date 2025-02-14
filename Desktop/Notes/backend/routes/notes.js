import express from "express";

import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const router = express.Router();

// router.get("/", getNotes);

// router.get("/:id", getNote);

// router.post("/", createNote);

// router.put("/:id", updateNote);

// router.delete("/:id", deleteNote);

import { requireAuth } from "../middlewares/requireAuth.js";
router.use(requireAuth);

router.route("/").get(getNotes).post(createNote);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

export default router;
