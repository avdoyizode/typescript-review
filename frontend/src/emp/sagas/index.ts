import { all, fork } from "redux-saga/effects";

import empSaga from "./sagas";

export function* rootSaga() {
  yield all([fork(empSaga)]);
}
