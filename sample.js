import {ApiPromise, WsProvider } from '@polkadot/api';
import { Abi, ContractPromise } from '@polkadot/api-contract';
import { readFile } from 'fs/promises';
import * as path from 'path';

const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

const abiJson = JSON.parse(
await readFile(
new URL('./ToyotaToken_metadata.json', import.meta.url)
)
);

const abi = new Abi(abiJson, api.registry.getChainProperties());
const value = 0;
const gasLimit = -1;
const address = '確認したアドレス';

const contract = new ContractPromise(api, abi, address);

const { gasConsumed, result, output } = await contract.query.get('確認したアドレス',{ value, gasLimit });

// The actual result from RPC as `ContractExecResult`
console.log(result.toHuman());

// gas consumed
console.log(gasConsumed.toHuman());

// check if the call was successful
if (result.isOk) {
// should output 123 as per our initial set (output here is an i32)
console.log('Success', output.toHuman());
} else {
console.error('Error', result.asErr);
}