import {
  FETCH_EMP_REQUEST,
  FETCH_EMP_SUCCESS,
  FETCH_EMP_FAILURE,
  UPDATE_EMP_FAILURE,
  UPDATE_EMP_SUCCESS,
} from "../actions/actionTypes";

import { EmpActions, EmpState } from "../constants";

const initialState: EmpState = {
  pending: false,
  emps: [],
  error: false,
};

export default (state = initialState, action: EmpActions) => {
  switch (action.type) {
    case FETCH_EMP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EMP_SUCCESS:
      return {
        ...state,
        pending: false,
        emps: action.payload.emps,
        error: null,
      };
    case FETCH_EMP_FAILURE:
      return {
        ...state,
        pending: false,
        emps: [],
        error: action.payload.error,
      };
    case UPDATE_EMP_SUCCESS:
      return {
        ...state,
        pending: false,
        emps: action.payload.emps,
        error: null,
      };
    case UPDATE_EMP_FAILURE:
      return {
        ...state,
        pending: false,
        emps: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
