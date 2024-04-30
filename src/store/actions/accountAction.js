import { CREDIT, DEBIT } from '../constants';

export const credit = (amount) => {
  return{
    type: CREDIT,
    payload: amount
  }
  };
  
  export const debit = (amount) => {
    return{
      type: DEBIT,
      payload: amount
    }
  };