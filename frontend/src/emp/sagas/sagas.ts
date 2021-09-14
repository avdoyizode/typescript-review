import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchEmpFailure, fetchEmpSuccess } from "../actions/actions";
import { FETCH_EMP_REQUEST } from "../actions/actionTypes";
import { UPDATE_EMP_SUCCESS } from "../actions/actionTypes";

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

/* Put method */
function* updateEmployee(getEmps: any): any {
  try {
    const response = yield call(getEmps);
    yield put({ type: UPDATE_EMP_SUCCESS });
    console.log("Updated a user successfully");
  } catch {
    console.log("Failed");
  }
}
function* empSaga() {
  yield all([takeLatest(UPDATE_EMP_SUCCESS, updateEmployee)]);
}
export default empSaga;
