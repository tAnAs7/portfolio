import { combineReducers } from "redux";

import Posts from "./posts";
import Events from "./events";

export const reducers = combineReducers({ posts: Posts, events: Events });
