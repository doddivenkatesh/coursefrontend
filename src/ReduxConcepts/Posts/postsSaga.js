import { put, call, takeEvery } from "redux-saga/effects";

function* asyncFetchPosts() {
  yield put({ type: "FETCHING" });

  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = yield call([response, "json"]);
    yield put({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", payload: error.message });
  }
}

export function* watchPostsActions() {
  yield takeEvery("FETCH_POSTS", asyncFetchPosts);
}
