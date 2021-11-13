## Design Pattern Decisions

### The following smart contract design patterns were incorporated for this project:

#### CurationStation.sol

##### Access Control Design Pattern / Circuit Breaker with Ownable/Pausable
1. Ownable: this contract specifies that only the deployer of this factory contract can pause/unpause it
2. Pausable: this contract allows the owner to pause or unpause CurationStation

##### Inheritance and/or Interface
1. This contract inherits from to library contracts: (Ownable, Pausable)
2. This contract makes active use of the inherited functions (ex: isPaused)

##### Factory Contract
1. Project functionality it divided into a "factory" launcher contract (CurationStation) and the exhibition template (Exhibition)


#### Exhibition.sol

TBD
1. State Machine TBD










