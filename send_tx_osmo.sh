#!/bin/bash

#your seed goes here
'share flame stumble mutual ivory wool fun burden hill car van bid' | osmosisd keys add cosmst --recover
VALIDATOR_ADDRESS=$(osmosisd keys show cosmst -a)
yes | osmosisd tx bank send $CSMT_VALIDATOR_ADDRESS osmo10rpv2hdmw5mta0akn9sg2uud45hhc5l76qzeft 200000uosmo --chain-id osmosis-1 --fees 20000uosmo --gas auto -gas-adjustment=1.15

