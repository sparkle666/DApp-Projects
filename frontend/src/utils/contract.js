import { ethers } from 'ethers';

export const contractAddress = '0xD48b5904ab6E62dAF393C51b5E163981656efD61';

export const hexToDecimal = (hex) => {
  return ethers.utils.formatUnits(hex, 6);
};
