import {
  FETCH_EMP_REQUEST,
  FETCH_EMP_FAILURE,
  FETCH_EMP_SUCCESS,
  UPDATE_EMP_FAILURE,
  UPDATE_EMP_SUCCESS,
} from "./actionTypes";
import {
  FetchEmpRequest,
  FetchEmpSuccess,
  FetchEmpSuccessPayload,
  FetchEmpFailure,
  FetchEmpFailurePayload,
  UpdateEmpSuccess,
  UpdateEmpSuccessPayload,
  UpdateEmpFailure,
  UpdateEmpFailurePayload,
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

export const updateEmpSuccess = (
  payload: UpdateEmpSuccessPayload
): UpdateEmpSuccess => ({
  type: UPDATE_EMP_SUCCESS,
  payload,
});

export const updateEmpFailure = (
  payload: UpdateEmpFailurePayload
): UpdateEmpFailure => ({
  type: UPDATE_EMP_FAILURE,
  payload,
});
