// run.js

import dotenv from 'dotenv'
import { execSync } from 'child_process'

dotenv.config()

const privateKey = process.env.PRIVATE_KEY2
const rpcUrl = 'https://rpc.sonic.fantom.network/'
const WETH9 = '0x54c3F0c4AfA850Ce839994aE6512699d4dD9b075'
const nativeCurrency = '$S'
const ownerAddress = process.env.WALLET_ADDRESS2

const command = `yarn start -pk ${privateKey} -j ${rpcUrl} -w9 ${WETH9} -ncl ${nativeCurrency} -o ${ownerAddress} -version`

execSync(command, { stdio: 'inherit' })
