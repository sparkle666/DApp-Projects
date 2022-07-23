import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Panel = () => {
  const { connectWallet, account } = useContext(AppContext);
  console.log('Account', account);
  return (
    <div className="is-flex is-justify-content-center is-align-items-center">
      <div className="box">
        {!account ? <h2> Connect Wallet to get started </h2> : null}
        <button className="button is-primary" onClick={connectWallet}>
          {account
            ? account.slice(0, 3) + '...' + account.slice(-4)
            : 'Connect Wallet'}
        </button>
      </div>
    </div>
  );
};
export default Panel;
