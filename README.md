# blockchain-developer-bootcamp-final-project

## Contemporary art exhibition launch site: a platform for curators


### Project Public Address (Vercel)
TBD

### About This Project 

#### Background  
    
This project is a small component (Phase One) in a larger framework for curators to have a complete platform for launching, organizing, and tracking art exhibitions from origination to final gallery installation.

See "Further Background" markdown file for more detailed background and future planning.
  
#### This Deployment  
    
For Phase One, at the very basic level this project component allows any aspiring curator to create an exhibiton, launch it with a funding minimum and show information, take contributions from patrons, and make expense proposals which can be endorsed by project patrons before withdrawal to a vendor by the curator (greater than 50% endorsement by patrons allows expenses to be transferred to a vendor address). 

### Example User Workflow

1) On the Current Exhibitons page, the new Curator can create an exhibition.
     
2) A new smart contract / Exhibition address is created and listed on the Current Exhibitions page. A link for each leads the user to a complete Exhibition Information page.
  
3) At the Exhibition Information page for each show, the user can either: A) send ETH to the project budget from the Contribute Form at the top right, OR B) go to the "Expense Proposals" page for the project by clicking the "View Expense Proposals" link below the Contribute Form."
  
4) At the Expense Proposals page, the Curator of the show can fill out a "Create Expense Proposal" form at the top of the page, submit it, and it will be immediately added to the "Expense Proposals" table below. This functionality is restricted to CURATORS ONLY and MetaMask will display an error if not followed.
   
5) At the Expense Proposals page, Patrons (those who have contributed to the project) can Endorse a proposal by clicking the "Endorse" button on each proposal row.

6) After more then 50% of Patrons have endorsed/approved the proposal (ex. "2/3") the Curator may "Finalize" the expense -- this triggers a transfer of the proposal amount to the listed vendor address.  
     
### System Requirements
Requires MetaMask to run this app in the browser.   
Requires Node.js 14.8.0.   
Requires NPM 6.14.15.   
Requires Truffle / Ganache-CLI for testing and local deployment.  



### Directory Structure
TBD


### Accessing The Public Deployment (Vercel)
TBD

### installation on a local host
TBD


### migrating, testing and Truffle
TBD

### adapting, adding to and deploying this project for other uses
TBD

### design process, scope and future considerations
See "Further Background" markdown file.