#!/bin/bash

#your seed goes here
'share flame stumble mutual ivory wool fun burden hill car van bid' | gaiad keys add cosmt --recover
VALIDATOR_ADDRESS=$(gaiad keys show cosmt -a)
gaiad tx bank send $VALIDATOR_ADDRESS cosmos10rpv2hdmw5mta0akn9sg2uud45hhc5l7jm3fle 10000uatom --fees=15000uatom --gas=auto --gas-adjustment=1.20 --chain-id=cosmoshub-4 --node=https://rpc.cosmos.network:443


