import { combineReducers } from "redux";

import { fetch } from "./fetch";

import { newEmp } from "./newEmp";
const rootReducer = combineReducers({
  fetch,
  newEmp,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
