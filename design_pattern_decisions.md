## Design Pattern Decisions

### The following smart contract design patterns were incorporated for this project:

#### CurationStation.sol

##### Access Control Design Pattern / Circuit Breaker with Ownable/Pausable
1. Ownable: this contract specifies that only the deployer of this factory contract can pause/unpause it
2. Pausable: this contract allows the owner to pause or unpause CurationStation
3. The primary function "launchExhibition" is disabled by the Owner when paused

##### Inheritance and/or Interface
1. This contract inherits from to library contracts: (Ownable, Pausable)
2. This contract makes active use of the inherited functions (ex: "whenNotPaused")

##### Factory Contract
1. Project functionality it divided into a "factory" launcher contract (CurationStation) and the exhibition template (Exhibition)
2. TBD - a new exhibition cannot come from outside CurationStation.sol, to be implemented.


#### Exhibition.sol

#### TBD

##### State Machine TBD

##### Ether withdrawal / transfer restrictions (state, no auto) TBD

##### string validation TBD










