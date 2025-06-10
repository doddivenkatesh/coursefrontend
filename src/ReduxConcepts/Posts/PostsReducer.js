const initialState = {
  apiStatus: "init",
  error: null,
  data: null,
};
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, apiStatus: "loading" };
    case "FETCH_SUCCESS":
      return { ...state, apiStatus: "FETCHING SUCCESS", data: action.payload };
    case "FETCH_FAILED":
      return { ...state, apiStatus: "error", error: "something went worng" };
    default:
      return state;
  }
};

export default PostsReducer;
