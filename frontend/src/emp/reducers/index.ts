import { combineReducers } from "redux";

import empReducer from "./reducer";

const rootReducer = combineReducers({
  emp: empReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
