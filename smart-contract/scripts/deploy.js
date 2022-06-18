const main = async () => {

  const Todos = await hre.ethers.getContractFactory("TodoList");
  const todos = await Todos.deploy();

  await todos.deployed();

  console.log("Transactions deployed to:", todos.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }
  catch (error){
    console.error(error);
    process.exit(1);
  }
}

runMain();