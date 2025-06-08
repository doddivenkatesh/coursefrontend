// ReduxConcepts/saga.js
import { put, call, takeEvery } from "redux-saga/effects";


function* asyncFetchUser() {
  yield put({ type: "FETCHING" });
  try {
    const response = yield call(fetch, "https://randomuser.me/api");
    const data = yield call([response, "json"]);
    yield put({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", payload: error.message });
  }
}

export function* watchUserActions() {
  yield takeEvery("FETCH_USER", asyncFetchUser);
}
