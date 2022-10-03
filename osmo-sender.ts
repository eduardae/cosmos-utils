// @ts-nocheck
import { FEES } from 'osmojs';

import { osmosis } from 'osmojs';
//import { getOfflineSignerAmino as getOfflineSigner } from 'osmojs'
import { getOfflineSignerProto as getOfflineSigner } from 'osmojs';
import { chains } from 'chain-registry';
import { getSigningOsmosisClient } from 'osmojs';
import { cosmos } from 'osmojs';
import { signAndBroadcast } from 'osmojs';
import { MsgSend } from 'osmojs/types/codegen/cosmos/bank/v1beta1/tx';
import { ibc } from 'osmojs';


const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl

const {
  multiSend,
  send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;


const {
  joinPool,
  exitPool,
  exitSwapExternAmountOut,
  exitSwapShareAmountIn,
  joinSwapExternAmountIn,
  joinSwapShareAmountOut,
  swapExactAmountIn,
  swapExactAmountOut
} = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

const mnemonic =
  'share flame stumble mutual ivory wool fun burden hill car van bid';
const fee = FEES.osmosis.swapExactAmountIn('low');

const chain = chains.find(({ chain_name }) => chain_name === 'osmosis');

const chainDto ={
  bech32_prefix: chain?.bech32_prefix,
  slip44: chain?.slip44
}

class OsmoSender {

  constructor() {
  }

  async signTransaction() {

    try {
      const signer = await getOfflineSigner({
        mnemonic: mnemonic,
        chain: chainDto
      });
      
      
      const client = await getSigningOsmosisClient({
        rpcEndpoint: 'https://rpc.osmosis.zone',
        signer: signer
      });
      
      /* TODO: sistemare 
      const msg = swapExactAmountIn({
        sender,
        routes: ,
        tokenIn: coin(0.1, 'OSMO'),
        tokenOutMinAmount: 0
      });
      */

      const msg = send({
        typeUrl: 'uosmos',
        value: {
          fromAddress: 'osmo19k94t609ktcldx8umkhudh2t9z0drd08rtfy5p',
          toAddress: 'osmo10rpv2hdmw5mta0akn9sg2uud45hhc5l76qzeft',
          amount: {
            denom: 'uosmos',
            amount: '0.01'
          } 
        }
      });
      
      const res = await signAndBroadcast({
        client: client,
        chainId: 'osmosis-1', // use 'osmo-test-4' for testnet
        address: 'osmo19k94t609ktcldx8umkhudh2t9z0drd08rtfy5p',
        msgs: [msg],
        fee: fee,
        memo: ''
      });
  
      console.log(res);
    } catch (err){ 
      console.error(err);
    }

   

  }  
}

module.exports.OsmoSender = OsmoSender;