import { NEW_EMP_ERROR, NEW_EMP_REQUEST } from "../actions/actionTypes";
import { EmpActions } from "../constants";
const initialState = { emps: [] };
export const newEmp = (state = initialState, action: EmpActions) => {
  switch (action.type) {
    case NEW_EMP_REQUEST:
      console.log(action.payload, "payyy", state, "ststae");
      return { ...state, emps: action.payload };
    case NEW_EMP_ERROR:
      return { throw: Error("error") };
    default:
      return state;
  }
};
