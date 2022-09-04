import express from "express";

import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from "../controllers/events.js";

const router = express.Router();

router.post("/create/", createEvent);
router.get("/get_all/", getEvents);
router.get("/get/:id", getEvent);
router.patch("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

export default router;
