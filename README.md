# Deploy Uniswap V3 Script

Fork of [`deploy-v3`](https://github.com/Uniswap/deploy-v3)

Added new dir './cli' which incluses a script to deploy Uniswap V3 contracts to the Sonic testnet.

Alternatively, a CLI command can be used.
First, you must run `yarn && yarn build`
The CLI command I used was `yarn start -pk <PRIVATE_KEY> -j https://rpc.sonic.fantom.network/ -w9 0x54c3F0c4AfA850Ce839994aE6512699d4dD9b075 -ncl '$S' -o 0xcc5534897319D6A8DB7BD87B43d23aEE0Ad94799 -c 0`
I omitted my private key from the command. Please be mindful that private key must be prefixed with `0x` in `-pk`.

The required WETH9 address is`0x9680cE83D7B7Ffa73A70d8c02Cf9B51DF122F45D`. This was deployed to Sonic test on 8/23/24 via a hardhat project.

Once ran, a `state.json` will be written to the root of the environment. If you need to re-deploy the Uniswap contracts, this file should be be deleted before again executing the command or rerunning the script.

Contract address that I deployed:

{
"v3CoreFactoryAddress": "0xBb5F17b4b598641AD1D946E3C2cEf23Fb96249D4",
"multicall2Address": "0xBc5D7dC6715FbB83c48f2F6B31149FE6684d1648",
"proxyAdminAddress": "0xbcc76737C06e5CB5BF888A6619F4e8487b492866",
"tickLensAddress": "0x1E19b0325e6A39543EcE5b32e76969905Eed2481",
"nftDescriptorLibraryAddressV1_3_0": "0x447C24E7FA00eC545B8497b3Ad2D8498A0822A3b",
"nonfungibleTokenPositionDescriptorAddressV1_3_0": "0xd157077eCE641207c348Cc6178b06a70D387Cb6a",
"descriptorProxyAddress": "0x853586d3eec84Ec0EB2E56B7d7Ef600ec57ce882",
"nonfungibleTokenPositionManagerAddress": "0x3e3CAA2AE0B10757921b479F5db0F51475C2fE39",
"v3MigratorAddress": "0xF2bdb02aF00d45f6717C2e308B445472ed1cE22B",
"v3StakerAddress": "0xB3964D9ae27FDf6BB2c89ADCe737d12a41aB1f05",
"quoterV2Address": "0x96F1EDa317935F2E86e7c3550F0bdCDBe5e14A9e",
"swapRouter02": "0xE67701aac6D40d34c43367D90FdeaE0095dc28Ba"
}

Command Outputs are written to `deployment.log`.
Unfortunately, I have yet to find a way to verify these contracts on the Sonic testnet.
