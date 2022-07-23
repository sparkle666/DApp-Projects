import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BuyCard = () => {
  const { account, purchase } = useContext(AppContext);

  const handlePurchase = async (e) => {
    const txn = await purchase('1', account);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ width: '300px' }}>
        <div className="card-image">
          <figure className="image">
            <img
              src="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <h3 style={{ fontWeight: '400', marginBottom: "6px" }}><b>Large Size Pizza</b></h3>
          <div className="content">
            The best pizza out there with a generous amount of protein and
            nutrients.
            <p>
              <b> We only accept crypto payments. </b>
            </p>
          </div>
          <div className="" style = {{display: "flex",
            justifyContent: "space-between", alignItems:"center", gap: "20px", verticalAlign: "center"}}>
              <p> <b>0.001 ether</b> </p>
            <button className="button is-primary card-footer-item" onClick={handlePurchase}>
              Buy
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyCard;
