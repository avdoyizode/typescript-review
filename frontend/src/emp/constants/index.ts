import {
  FETCH_EMP_REQUEST,
  FETCH_EMP_SUCCESS,
  FETCH_EMP_FAILURE,
  NEW_EMP_ERROR,
  NEW_EMP_REQUEST,
} from "../actions/actionTypes";

export interface IEmp {
  name: string;
  age: number | string;
  city: string;
  status?: boolean;
}

export interface EmpState {
  pending: boolean;
  emps: IEmp[];
  error: string | null | boolean;
}

export interface FetchEmpSuccessPayload {
  emps: IEmp[];
}

export interface FetchEmpFailurePayload {
  error: any;
}
export interface NewEmpPayload {
  name: string;
  age: number | string;
  city: string;
  status?: boolean;
}
export interface NewEmpErrPayload {
  error: any;
}

export interface NewEmpErr {
  type: typeof NEW_EMP_ERROR;
  payload: NewEmpErr;
}
export interface NewEmpReq {
  type: typeof NEW_EMP_REQUEST;
  payload: { name: string; age: number | string; city: string };
}
export interface FetchEmpRequest {
  type: typeof FETCH_EMP_REQUEST;
}
export type FetchEmpSuccess = {
  type: typeof FETCH_EMP_SUCCESS;
  payload: FetchEmpSuccessPayload;
};

export type FetchEmpFailure = {
  type: typeof FETCH_EMP_FAILURE;
  payload: FetchEmpFailurePayload;
};

export type EmpActions =
  | FetchEmpRequest
  | FetchEmpSuccess
  | FetchEmpFailure
  | NewEmpErr
  | NewEmpReq;
