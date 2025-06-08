// RandomUserReducer.js
const initialState = { apiStatus: "init", error: "", data: null };
export default function randomUserReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING":
      return { ...state, apiStatus: "loading" };
    case "FETCH_SUCCESS":
      return { ...state, apiStatus: "success", data: action.payload };
    case "FETCH_FAILED":
      return { ...state, apiStatus: "error", error: "Something went wrong" };
    default:
      return state;
  }
}
