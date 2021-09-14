import {
  FETCH_EMP_REQUEST,
  FETCH_EMP_FAILURE,
  FETCH_EMP_SUCCESS,
  NEW_EMP_REQUEST,
} from "./actionTypes";
import {
  FetchEmpRequest,
  FetchEmpSuccess,
  FetchEmpSuccessPayload,
  FetchEmpFailure,
  FetchEmpFailurePayload,
  NewEmpReq,
} from "../constants";

export const fetchEmpRequest = (): FetchEmpRequest => ({
  type: FETCH_EMP_REQUEST,
});

export const fetchEmpSuccess = (
  payload: FetchEmpSuccessPayload
): FetchEmpSuccess => ({
  type: FETCH_EMP_SUCCESS,
  payload,
});

export const fetchEmpFailure = (
  payload: FetchEmpFailurePayload
): FetchEmpFailure => ({
  type: FETCH_EMP_FAILURE,
  payload,
});

export const NewEmp = (
  name: string,
  age: number | string,
  city: string
): NewEmpReq => ({
  type: NEW_EMP_REQUEST,
  payload: { name, age, city },
});
