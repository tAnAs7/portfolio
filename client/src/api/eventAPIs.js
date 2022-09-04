import axios from "axios";

const eventUrl = "http://localhost:5000/events";
export const fetchEvents = () => axios.get(`${eventUrl}/get_all`);
export const createEvent = (newEvent) =>
  axios.post(`${eventUrl}/create`, newEvent);
export const updateEvent = (id, updatedEvent) =>
  axios.patch(`${eventUrl}/${id}`, updatedEvent);
export const deleteEvent = (id) => axios.delete(`${eventUrl}/${id}`);
