import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as accountActions from '../store/actions/accountAction';

function Account() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state);
  const [amount, setAmount] = useState();



  const handleCredit = () => {
    dispatch(accountActions.credit(amount));
  };

  const handleDebit = () => {
    dispatch(accountActions.debit(amount));
  };

  const handleAmountChange = (event) => {
    setAmount(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div>
        <button onClick={handleCredit}>Credit</button>
      </div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <div>
        <button onClick={handleDebit}>Debit</button>
      </div>
      <h1>{balance === 0? "Empty" : `Balance: ${balance.account}`}</h1>
    </div>
  );
}

export default Account;