//Libs
import mongoose from "mongoose";

//Model
import Tournaments from "../../models/sport/football/tournaments.js";

export const fetchTournaments = async (req, res) => {
  const { date } = req.params;
  try {
    const event = await Event.findById(id);

    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
