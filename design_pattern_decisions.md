## Design Pattern Decisions

### The following smart contract design patterns were incorporated for this project:

#### CurationStation.sol

##### Access Control Design Pattern / Circuit Breaker with Ownable/Pausable
1. Ownable: this contract specifies that the deployer (Owner) of this factory contract can pause/unpause it due to emergency or improper use.   
2. Pausable: this contract allows the Owner to pause or unpause CurationStation for the circuit breaker functionlity.   
3. The primary function "launchExhibition" is disabled by the Owner when "paused" bool is true

##### Inheritance and/or Interface
1. This contract inherits from the OpenZeppelin library contracts: (Ownable, Pausable)
2. This contract makes active use of the inherited function modifier in Pausable (ex: "whenNotPaused" allows active state to continue)

##### Factory Contract
1. Project functionality is divided into a "factory" launcher contract (CurationStation) and the exhibition template (Exhibition)
2. User gas costs and Ethereum fees for launching a new exhibition are delegated to the prospective Curator. 








