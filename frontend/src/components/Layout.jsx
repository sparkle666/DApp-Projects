import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { connectWallet, account } = useContext(AppContext);
  return (
    <div className="">
      <Nav />
      <ToastContainer />
      <Outlet />
    </div>
  );
};
export default Layout;
