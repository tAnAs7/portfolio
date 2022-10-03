import mongoose from "mongoose";

const tournament = mongoose.Schema({
  tournamentId: String,
  name: String,
  participants: [String],
  icon: String,
  description: String,
  chapion: String,
});

var model = mongoose.model("Tournament", tournament);

export default model;
