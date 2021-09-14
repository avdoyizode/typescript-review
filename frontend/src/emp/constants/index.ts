import {
  FETCH_EMP_REQUEST,
  FETCH_EMP_SUCCESS,
  FETCH_EMP_FAILURE,
  UPDATE_EMP_FAILURE,
  UPDATE_EMP_SUCCESS,
} from "../actions/actionTypes";

export interface IEmp {
  name: string;
  age: number;
  city: string;
  status: boolean;
}

export interface EmpState {
  pending: boolean;
  emps: IEmp[];
  error: any;
}
export interface FetchEmpSuccessPayload {
  emps: IEmp[];
}

export interface FetchEmpFailurePayload {
  error: any;
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
export interface UpdateEmpSuccessPayload {
  emps: IEmp[];
}

export interface UpdateEmpFailurePayload {
  error: any;
}

export type UpdateEmpSuccess = {
  type: typeof UPDATE_EMP_SUCCESS;
  payload: UpdateEmpSuccessPayload;
};

export type UpdateEmpFailure = {
  type: typeof UPDATE_EMP_FAILURE;
  payload: UpdateEmpFailurePayload;
};
export type EmpActions =
  | FetchEmpRequest
  | FetchEmpSuccess
  | FetchEmpFailure
  | UpdateEmpSuccess
  | UpdateEmpFailure;
