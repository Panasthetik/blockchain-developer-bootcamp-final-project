## Avoiding Common Attacks

### The following precautions against attacks were incorporated for this project:

#### SWC-103 (Floating Pragma):
The compiler pragma "0.8.0" was strictly used by all smart contracts in this project. This pragma was specified in all contracts and the truffle-config file. The deployed contracts on Kovan are compiled using "pragma solidity 0.8.0". The inherited OpenZeppelin libraries are also in "0.8.0."

#### SWC-105 (Unprotected Ether Withdrawal) in Exhibitions.sol
1) Restricted Modifier: the function for creating an expense proposal, and the "Finalize" proposal function, are both restricted to the Curator using the "restricted" modifier.
2) Check Effects Interaction: the state change for "proposal.value" is set to zero before the ETH is transferred to the vendor upon "Finalize".
3) OnlyFunded Modifier : The "require" statement is used for an Exhibition balance to exist before an expense proposal can be created (Curator cannot initiate a withdrawal without a budget).
4) Require "bool (success, )" is added to verify transaction completion.

#### use .call() instead of .transfer() or .send() in Exhibitions.sol
The contract used 'recipient.call{value: proposal.value}("")' instead of ".transfer()"; 
   
#### Emergency Brake
1. Ownable: this contract specifies that the deployer (Owner) of this factory contract can pause/unpause it due to emergency or improper use.   
2. Pausable: this contract allows the Owner to pause or unpause CurationStation for the circuit breaker functionality.   
3. The primary function "launchExhibition" is disabled by the Owner when "paused" bool is true

#### Modifiers
Modifiers of "onlyFunded", "whenNotPaused", and "restricted" are only used for validation.







