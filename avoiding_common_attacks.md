## Avoiding Common Attacks

### The following precautions against attacks were incorporated for this project:

#### SWC-103 (Floating Pragma):
The compiler pragma "0.8.0" was strictly used by all smart contracts in this project. This pragma was specified in all contracts and the truffle-config file. The deployed contracts on Kovan are compiled using "pragma solidity 0.8.0". The inherited OpenZeppelin libraries are also in "0.8.0."

#### SWC-105 (Unprotected Ether Withdrawal)
State Machine TBD
Restricted Modifier TBD

#### use .call() instead of .transfer() or .send();
#### Emergency Brake

#### Modifiers
only used for validation

#### No Fallback function (revert)

#### Proper use of require






