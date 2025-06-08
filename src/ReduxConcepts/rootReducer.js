import { combineReducers } from "redux";
import randomUserReducer from "./RandomUserReducer"; // ✅ Correct reducer

const rootReducer = combineReducers({
  user: randomUserReducer, // ✅ NOT the component!
});

export default rootReducer;
