// ReduxConcepts/rootSaga.js
import { all, fork } from "redux-saga/effects";
import { watchUserActions } from "./saga";
import { watchPostsActions } from "./Posts/postsSaga";

export default function* rootSaga() {
  yield all([fork(watchUserActions), fork(watchPostsActions)]);
}
