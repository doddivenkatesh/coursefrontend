// ReduxConcepts/rootSaga.js
import { all, fork } from "redux-saga/effects";
import { watchUserActions } from "./saga";

export default function* rootSaga() {
  yield all([fork(watchUserActions)]);
}
