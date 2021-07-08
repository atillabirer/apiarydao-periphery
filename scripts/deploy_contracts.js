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
  const routerContract = await hre.ethers.getContractFactory('PancakeRouter')
  const RouterContract = await routerContract.deploy(
    '0x3f5930190eBA9Aef2aD8a093a8CFDaaa08Ed24df',
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
  )
  await RouterContract.deployed()
  console.log(RouterContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
