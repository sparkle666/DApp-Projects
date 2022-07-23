import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Restock = () => {
  const { account, restock, balDetails } = useContext(AppContext);
  const [amount, setAmount] = useState('');

  // const display = async() => {
  //   const bal = await balDetails;
  //   console.log(bal[2])
  // }
  // display()
  // console.log(account, amount);

  const handleRestock = async () => {
    const bal = await balDetails;
    await account;
    if (account !== '0x1D3E0725bD6dAf542C780AeDF28553B399556697') {
      alert('Only the owner of the contract can restock');
      return;
    }
    let maxRestock = 100 - bal[2];
    if (amount && amount <= maxRestock) {
      const txn = await restock(amount.toString());
      setAmount('');
    }
  };

  return (
    <div
      className="column"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Restock"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleRestock}>
            Restock
          </button>
        </div>
      </div>
    </div>
  );
};
export default Restock;
