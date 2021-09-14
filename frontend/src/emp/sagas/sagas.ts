import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchEmpFailure, fetchEmpSuccess } from "../actions/actions";
import {
  FETCH_EMP_REQUEST,
  NEW_EMP_REQUEST,
  NEW_EMP_ERROR,
} from "../actions/actionTypes";
import { IEmp } from "../constants";

const getEmps = () => axios.get<IEmp[]>("http://localhost:9090/employees");

function* fetchEmpSaga(): any {
  try {
    const response = yield call(getEmps);
    yield put(
      fetchEmpSuccess({
        emps: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchEmpFailure({
        error: e,
      })
    );
  }
}
function* newEmps(action: any): any {
  try {
    const { name, age, city } = action;
    console.log(name, age, city);
    const details = yield axios
      .post("http://localhost:9090/employees", { name, age, city })
      .then((resp) => resp.data);
    yield put({ type: NEW_EMP_REQUEST, data: details });
  } catch (error) {
    yield put({ type: NEW_EMP_ERROR, error });
  }
}

function* empSaga() {
  yield all([
    takeLatest(FETCH_EMP_REQUEST, fetchEmpSaga),
    takeLatest(NEW_EMP_REQUEST, newEmps),
  ]);
}

export default empSaga;
