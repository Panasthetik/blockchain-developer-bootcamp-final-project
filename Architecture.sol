//SPDX-License-Identifier: GPL-3.0;

pragma solidity 0.8.0;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CurationStation is Ownable, Pausable {


    function pause() public onlyOwner {
        _pause();
    }
    
    function unpause() public onlyOwner {
        _unpause();
    }
    
    function launchExhibition() public whenNotPaused {

        /// function logic goes here

    }

    function getLaunchedExhibitions() public view returns (address[] memory){
        
    /// returns address index array of all launched exhibitions
        
    }

}

contract Exhibition {


 struct ExpenseProposal {
       
     /// proposal struct values here
        
    }

    /// state variables here
    

    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    constructor () {
        
    /// constructor variables for Exhibition here

    }

    function makeContribution() public payable {

    /// contribute form logic here

    }
}

    function createExpenseProposal()
    public restricted returns (uint proposalID) {
        
    /// create expense proposal logic here

    }

    function endorseProposal(uint index) public {

    /// endorse proposal logic here

    }

    function finalizeProposal(uint index) public restricted {
        
    /// finalize proposal logic here
        
    }

    function getSummary() public view returns () {
        
    /// returns summary variables here 

    }

}
