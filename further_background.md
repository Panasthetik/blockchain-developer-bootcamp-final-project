### Further Background  
  
Typically contemporary art exhibitions have a high barrier to entry, and curatorial concerns exist primarily through reputation, financial clout, and word of mouth. A new platform to democratize the process of launching a show, networking for funding, and delegating tasks for implementation would be a welcome addition today and give aspiring curators a new outlet to quickly spin up a concept and search for funding.

Why blockchain for this approach? The primary reasons for this choice of implementation on Ethereum are 1) decentralization of access (normal art world channels are elitist and exlusive to a few central insiders), 2) verifiable tracking and common participation in the proposal process on-chain, less prone to manipulation, and 3) a foundation for a future curatorial reputation system based on Ethereum address(es) - this would be part of a phased approach whereby identity, a social networking component, and DAO structure for governance could be added later for a future-proof rollout.   
    
There are no timelocks, strict funding goal enforcement, refunds, or restrictions on donors (whitelisting) at present. This type of functionality is beyond the scope of this phase, and can be added later as part of a more complete implementation (DAO governance model with a multi-sig treasury is one possible approach).

#### This Deployment (Expanded)  
  
1) On the Current Exhibitons page, the new curator can create an exhibition with the project details, suggested goal amount, and minimum contribution.
     
2) A new smart contract / exhibition address is created and listed on the Current Exhibitions page. For each listed exhibition, a link leads the user to a complete Exhibition Information page with all show details.
  
3) At the Exhibition Information page for each show, the user can either: A) send ETH to the project budget from the Contribute form at the top right (curator or patrons can both support exhibition), OR B) make an expense proposal by linking to the Expense Proposals page (link "View Expense Proposals" visible under Contribute Form).
  
4) At the Expense Proposals page, the curator of the show can fill out a "Create Expense Proposal form at the top of the page, submit it, and it will be added to the "Expense Proposals" table below. This functionality is restricted to curators only.

5) At the Expense Proposals page, patrons (those who have contributed to the project) can Endorse a proposal by clicking the "Endorse" button on each proposal row.

6) Once more then 50% of patrons have endorsed/approved the proposal (ex. "2/3") the curator may "Finalize the expense -- this triggers a transfer of the proposal amount to the listed vendor address.

7) Once Expense Proposals are finalized, they are no longer active but are listed as archived proposals in the table.


