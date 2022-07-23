import { createContext } from 'react';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAddress, hexToDecimal } from '../utils/contract';
import contractABI from '../utils/abi.json';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const { ethereum } = window;

const createContract = () => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractABI.output.abi,
      signer
    );

    return contract;
  } catch (e) {
    console.log(e);
  }
};

export const AppContextProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [balDetails, setBalDetails] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    connectWallet();
  }, [account]);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');
      setIsLoading(true);
      // connect to metamask wallet  and get connected accounts
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
      await getBalances();
      setIsLoading(false);
      setIsConnected(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      throw new Error('No ethereum object');
    }
  };
  // Check if wallet is connected and retrieve the accounts
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setAccount(accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBalances = async () => {
    try {
      // get all balances from the contract and return as an array
      const contract = await createContract();
      const contractBal = await contract.getContractBalance(); // get amount of ether in contract
      const addressBal = await contract.getAddressBalance(account);
      const vendingBal = await contract.getVendingMachineBalance();
      setBalDetails([
        ethers.utils.formatEther(parseInt(contractBal)),
        parseInt(addressBal),
        parseInt(vendingBal),
      ]);
      // await purchase('1', account.toString());
    } catch (e) {
      console.log(e.msg);
    }
  };
  const purchase = async (amount, address) => {
    try {
      const contract = await createContract();
      setIsLoading(true);
      const buyPizza = await contract.purchase(amount, {
        from: address,
        value: ethers.utils.parseEther('0.001'), // convert to ether to wei
      }); // get amount of pizzas
      await buyPizza.wait();
      setMessage('Bought!!');
      setIsLoading(false);
      return buyPizza.hash;
    } catch (e) {
      setMessage('Error!!');
      setIsLoading(false); // to avoid showing loading while transaction has failed
      console.log(e.message);
    }
  };
  const restock = async (amount) => {
    try {
      const contract = await createContract();
      setIsLoading(true);
      const restock = await contract.restock(amount); // get amount of pizzas
      await restock.wait();
      setIsLoading(false);
      console.log(restock.hash);
    } catch (e) {
      setMessage('Error!!');
      setIsLoading(false);
      console.log(e.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        name: 'Sixtus',
        createContract,
        connectWallet,
        account,
        isLoading,
        getBalances,
        purchase,
        restock,
        balDetails,
        message,
        isConnected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
