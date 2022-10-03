import express from "express";

import { fetchTournaments } from "../controllers/sports/football.js";

const router = express.Router();

router.post("/fetch/tournament-by-month/:date", fetchTournaments);

export default router;
