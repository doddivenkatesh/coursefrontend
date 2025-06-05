import { put, takeEvery } from "redux-saga/effects";
// put is used to dispatch actions
// takeEvery is used to listen for actions
// and call the asyncFetchUser function
// whenever the action is dispatched
// This is a generator function
// that yields control back to the saga middleware
// until the async operation is complete
// and then resumes execution
// with the result of the async operation
// This is used to handle side effects in Redux
// such as fetching data from an API
function* asyncFetchUser() {
  yield put({ type: "FETCHING" });
  try {
    const response = yield fetch("https://randomuser.me/api");
    if (response.ok) {
      const data = yield response.json();
      yield put({ type: "FETCH_SUCCESS", payload: data });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: "FETCH_FAILED" }); //, payload: error.message
  }
}
export function* watchUserActions() {
  yield takeEvery("FETCH_USER", asyncFetchUser);
}
