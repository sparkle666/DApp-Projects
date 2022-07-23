import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { connectWallet, account, isLoading } = useContext(AppContext);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/02wlwmx48sqqgrdzrn2j.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className={toggle ? 'navbar-burger is-active' : 'navbar-burger'}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setToggle(!toggle)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={
          toggle ? 'navbar-menu is-active trans_fadeIn' : 'navbar-menu'
        }
      >
        <div className="navbar-start">
          <a className="navbar-item">Book Store</a>

          <a className="navbar-item">Mint NFT</a>
          <a className="navbar-item">ERC 20</a>
          <a className="navbar-item">Vending Machine</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {isLoading ? (
              <button className="button is-primary is-loading" disabled>
                Loading{' '}
              </button>
            ) : (
              <button className="button is-primary" onClick={connectWallet}>
                {account
                  ? account.slice(0, 3) + '...' + account.slice(-4)
                  : 'Connect Wallet'}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
