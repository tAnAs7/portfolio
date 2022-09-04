import mongoose from "mongoose";

const event = mongoose.Schema({
  titleEvent: String,
  descriptionEvent: String,
  path: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  startedAt: {
    type: Date,
  },
  endedAt: {
    type: Date,
  },
  createdBy: String,
  selectedImg: String,
});

var Event = mongoose.model("event", event);

export default Event;
