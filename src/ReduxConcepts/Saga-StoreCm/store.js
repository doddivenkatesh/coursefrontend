import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchUserActions } from "../saga";

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  apiStatus: "init",
  error: "",
  data: null,
};
function reducer(state = initialState, action) {
  if (action.type === "FETCH_SUCCESS") {
    return {
      ...state,
      apiStatus: "success",
      data: action.payload,
    };
  } else if (action.type === "FETCH_FAILED") {
    return {
      ...state,
      apiStatus: "error",
      error: "something went wrong",
    };
  } else if (action.type === "FETCHING") {
    return {
      ...state,
      apiStatus: "loading",
    };
  }

  return state;
}

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUserActions);
