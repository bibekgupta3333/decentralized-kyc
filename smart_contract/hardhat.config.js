// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  console.log(taskArgs, hre);
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
console.log(process.env);
// prod env
const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "";
console.log("Prod", INFURA_API_KEY, SEPOLIA_PRIVATE_KEY);
// local ganache env

const LOCAL_PROVIDER_URL = process.env.LOCAL_PROVIDER_URL || "";
const LOCAL_ADMIN_PRIVATE_KEY = process.env.LOCAL_ADMIN_PRIVATE_KEY || "";
console.log("local", LOCAL_PROVIDER_URL, LOCAL_ADMIN_PRIVATE_KEY);
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    },
    ganache: {
      url: `${LOCAL_PROVIDER_URL}`,
      accounts: [`0x${LOCAL_ADMIN_PRIVATE_KEY}`],
    },
  },
};
// infura
// Deploying contracts with account:  0xBC5aCd9B4139FBC457dc12E9499Ffd04293B2E81
// Account balance:  1573587594350731494
// DecentralizedKYC address:  0x0AF111565aFDbB0bfcF045efDFd219C2610e0793

// local ganache
// Deploying contracts with account:  0x31B0E7243C8eB3aD4E30Aa3d48e0f64F57710662
// Account balance:  100000000000000000000
// DecentralizedKYC address:  0x763aEdefEE24348b2723BfaC523e8478af9b4Ad9
