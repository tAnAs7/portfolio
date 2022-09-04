import {
  FETCH_ALL_ORDER,
  CREATE_ORDER,
  UPDATE_ORDER,
} from "../constants/actionTypes";

import * as api from "../api/eventAPIs.js";

export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();

    dispatch({ type: FETCH_ALL_ORDER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);

    dispatch({ type: CREATE_ORDER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);

    dispatch({ type: UPDATE_ORDER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
