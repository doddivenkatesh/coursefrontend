import { combineReducers } from "redux";
import randomUserReducer from "./RandomUserReducer"; // ✅ Correct reducer
import PostsReducer from "./Posts/PostsReducer";

const rootReducer = combineReducers({
  user: randomUserReducer, // ✅ NOT the component!
  posts: PostsReducer,
});

export default rootReducer;
