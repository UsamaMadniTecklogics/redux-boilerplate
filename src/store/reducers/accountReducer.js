import { CREDIT, DEBIT } from "../constants";

const initialState = 0; 

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREDIT:
      return state + action.payload; 
    case DEBIT:
      return state - action.payload > 0? state - action.payload : 0;
    default:
      return state;
  }
};

export default accountReducer;