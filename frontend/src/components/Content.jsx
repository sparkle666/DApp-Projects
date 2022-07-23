import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';
import { Ring } from 'react-awesome-spinners';
import { toast } from 'react-toastify';
import BuyCard from './BuyCard';
import Restock from './Restock';

const Content = () => {
  const { balDetails, purchase, isConnected, account, message } =
    useContext(AppContext);

  if (message) toast(message);

  const handleBuy = async (e) => {
    console.log('The account: ', account);
    const txn = await purchase('1', account);
  };
  if (!isConnected) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          height: '300px',
          justifyContent: 'center',
        }}
      >
        <div class="notification is-primary is-light">
          Connect your wallet to get started
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '30px' }}>
      <div st>
        {balDetails ? (
          <div className="columns">
            <Card
              heading="Available Pizzas"
              amount={balDetails[2]}
              progress={true}
            />
            <Card
              heading="Your Pizzas"
              amount={balDetails[1]}
              progress={true}
            />
            <Card
              heading="Contract Balance"
              amount={balDetails[0]}
              hasEther={true}
            />
          </div>
        ) : (
          <div className="is-flex is-justify-content-center is-align-items-center"></div>
        )}
      </div>
      <Restock />
      <BuyCard />
    </div>
  );
};
export default Content;
