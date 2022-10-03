#!/bin/bash

#your seed goes here
'share flame stumble mutual ivory wool fun burden hill car van bid' | osmosisd keys add cosmst --recover
VALIDATOR_ADDRESS=$(osmosisd keys show cosmst -a)
osmosisd tx bank send $CSMT_VALIDATOR_ADDRESS osmo10rpv2hdmw5mta0akn9sg2uud45hhc5l76qzeft 1000stake --chain-id osmosis-1 --node tcp://osmosis-mainnet-rpc.allthatnode.com:26657

