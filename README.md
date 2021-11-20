
## Curation Station: A Platform For Contemporary Art Curators


### Project Public Address (Vercel W/ Kovan Contract Deployment)
https://curationstation.vercel.app

NOTE: For the Vercel / public deployment connected to the Kovan testnet on ChainID 42, please allow at least THREE unique MetaMask accounts with Kovan test ETH to be able to use all of the core functionality.


### Ethereum Address For NFT Certification
TBD     

    
### Video Walkthroughs Of This Project
TBD   
   
### About This Project 

#### Background  
    
This project is a small component (Phase One) in a larger framework for curators to have a complete platform for launching, organizing, and tracking art exhibitions from origination to final gallery installation.

See "Further Background" markdown file for more detailed information and future planning.

#### System Requirements (for migrating, testing and local deployment)

Requires Node.js 14.8.0.   
Requires NPM 6.14.15.   
Requires Truffle / Ganache-CLI for testing and local deployment.  

Requires MetaMask to run this app in the browser.    
        
NOTE: For the ``` ganache-cli ```  local deployment, please be sure to change the contract instance address in ``` ethereum/station.js ```  (see instructions below), and to paste the ``` ganache-cli ```  mnemonic into MetaMask and initialize at least THREE unique test accounts on ``` localhost port 8545 ```  before ``` npm run build ``` and ``` npm start ``` .  

  
  
#### This Deployment  
    
For Phase One, at the very basic level this project component allows any aspiring curator to create an exhibition, launch it with a funding minimum and all exhibition information, take contributions from patrons, and make expense proposals which can be endorsed by project patrons before withdrawal to a vendor by the curator (greater than 50% endorsement by patrons allows expenses to be transferred to a vendor address).   

   
### Example User Workflow

1) On the Current Exhibitions page, the new Curator can create an exhibition.
     
2) A new smart contract / Exhibition address is created and listed on the Current Exhibitions page. A link for each leads the user to a complete Exhibition Information page.
  
3) At the Exhibition Information page for each show, the user can either: A) send ETH to the project budget from the Contribute Form at the top right, OR B) go to the "Expense Proposals" page for the project by clicking the "View Expense Proposals" link below the Contribute Form." NOTE: the Exhibition Information dynamically updates the following based on change to smart contract state: a) Exhibition Budget (remaining), b) number of Patrons, c) Proposals count; All other values are fixed at contract creation.   
     
4) At the Expense Proposals page, the Curator of the show can fill out a "Create Expense Proposal" form at the top of the page, submit it, and it will be immediately added to the "Expense Proposals" table below. This functionality is restricted to CURATORS ONLY and MetaMask will display an error if not followed.
   
5) At the Expense Proposals page, Patrons (those who have contributed to the project) can Endorse a proposal by clicking the "Endorse" button on each proposal row.

6) After more then 50% of Patrons have endorsed/approved the proposal (ex. "2/3") the Curator may "Finalize" the expense -- this triggers a transfer of the proposal amount to the listed vendor address.  
     


### Accessing The Public Deployment (Vercel)
TBD

### installation on a local host

TBD

### migrating, testing and Truffle
TBD


### Directory Structure

  
``` root ```    
Essential for this project to run - do not overwrite: ``` eslint.json ``` ``` server.js ``` ``` routes.js ``` ``` package.json ```   
     
NOTE:  The project uses Next.js as a server ( ```server.js ``` ). It also uses Next Routes ( ``` routes.js ``` ) for dynamic page generation and routing.
  
   

``` components ```
Contains all React components / hooks.
      

   
``` ethereum ```     
Contains all smart contracts, build artifacts, migration files, and test files :       
``` ./contracts ```        
``` ./build ```      
``` ./migrations ```     
``` ./test ```        
```  truffle-config.js  ```  

Also contains web3 connector files / contract instances - ``` exhibition.js ``` ,  ``` station.js ``` , ``` web3.js ``` ;  

   

``` pages ```  
Contains all main React pages for the app - (``` index.js ``` , ``` _app.js ``` ) with separate folders for ``` ./exhibition ```  pages and  the ``` ./requests ``` index.


  

### Known Issues
1) The MetaMask connect button does not always refresh to show wallet connection and chainID even if just connected through MetaMask pop-up.  It can update network information simply by hitting "Connect." This is an issue with React "state" and "props" and will have to be corrected in a future update. The fix is to rewrite all class components as functional components and use hooks / React context instead, along with expanded "web3-react".    
     
2) The proposal table does not always dynamically refresh when more patrons "Endorse", or when the Curator completes "Finalize", but can immediately update by refreshing the browser. This is also a React issue (see above). The components need to be rewritten as functional components and the "router" refresh needs a different state/props configuraton with React context. This is outside the project scope and will be done for a future release (see "Further Background" markdown file).    
   
3) Relative vs. absolute path bug on Proposal page (Next routes): sometimes the path on the Vercel deployment changes to relative path (ex: "/exhibitions/0x00......." instead of "/exhibitions/show?address=0x00.......") after a proposal is endorsed or finalized. This can be corrected in the browser by using the back button (/curationstation.vercel.app) and refreshing the navigation.



