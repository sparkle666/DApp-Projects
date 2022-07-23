import React from 'react';

const Card = ({ heading, amount, progress, hasEther }) => {
  const cardStyle = {
    column: {
      height: '400px',
    },
    header: {
      fontWeight: '400',
      fontSize: '20px',
    },
    amount: {
      fontSize: '23px',
    },
  };
  return (
    <div className="column">
      <div className="card is-outlined m-1">
        <div className="card-content">
          <h3 style={cardStyle.header}>
            <b>{heading}</b>
          </h3>
          {hasEther ? (
            <h4 style={cardStyle.amount}>{amount} ether</h4>
          ) : (
            <h4 style={cardStyle.amount}>{amount}</h4>
          )}
          {progress && (
            <progress
              className="progress is-primary is-small"
              value={amount}
              max="100"
            >
              15%
            </progress>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
