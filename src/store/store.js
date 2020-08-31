import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import resultsReducer from "./reducers/resultsReducer";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});

const store = createStore(rootReducer);

export default store;
