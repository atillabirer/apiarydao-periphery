const hre = require('hardhat')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const signers = await hre.ethers.getSigners()
  // We get the contract to deploy
  const routerContract = await hre.ethers.getContractFactory('PancakeRouter01')
  const RouterContract = await routerContract.deploy(
    '0x598FBf42613f0825bE7bB33c343d846b25Db14F9',
    '0xCBD2B5f163dC2A50317251E55e6f27Ee39dA0892'
  )
  await RouterContract.deployed()
  console.log(RouterContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
