# Week03 - Project
Form groups of 3 to 5 students
Develop and run scripts for “Ballot.sol” within your group to give voting rights casting votes, delegating votes and querying results
Write a report with each function execution and the transaction hash, if successful, or the revert reason, if failed
Submit your code in a github repository in the form

# scripts
- deploying
- givevoting rights
- casting votes
- delegating votes
- querying results

# DeployToken and BallotContract

input
```
clear; yarn run ts-node --files scripts/1_BallotDeployContract.ts Ghost in the shell
```


```

------------------------------ACCOUNT - CONNECTION------------------------------

Connected to the address 0xc8e653ea3F2245C640506659180a3F2a2189AfB3
Balance is 369332556914015218 WEI

--------------------------CONTRACT TOKEN - DEPLOYMENT--------------------------

Proposals: 
Proposal N. 1: Ghost
Proposal N. 2: in
Proposal N. 3: the
Proposal N. 4: shell
Token contract was deployed at address 0x35a24F28f846DB57F13B534799659824A81f31FF at the block 3524777

----------------------------CONTRACT TOKEN - MINTED----------------------------

Token was Minted for the Token contract at address 0x35a24F28f846DB57F13B534799659824A81f31FF
by the deployer 0xc8e653ea3F2245C640506659180a3F2a2189AfB3
at the block 3524778


----------------------------CONTRACT TOKENIZEDBALLOT----------------------------

TokenizedBallot contract was deployed at address 0x9267611856783B54c2d296F3594519bb37BFc63c
by the deployer 0xc8e653ea3F2245C640506659180a3F2a2189AfB3
at the block 3524779
The targeted block is 3524806
```
# DelegateToken + Give Vote Token 
input
```
clear; yarn run ts-node --files scripts/2_DelegateBallot.ts Ghost in the shell
```
```

------------------------------ACCOUNT - CONNECTION------------------------------

Connected to the address 0xc8e653ea3F2245C640506659180a3F2a2189AfB3
Connected to the block number 3524788
Balance is 362066145875261026 WEI

--------------------------CONTRACT TOKEN - ATTACHMENT--------------------------

Fetching votes from token contract...
Votes before self delegation:
The vote before self delegation is 0.0 at block 3524788

------------------CONTRACT TOKEN - SELF-DELEGATION - DEPLOYER------------------

0xc8e653ea3F2245C640506659180a3F2a2189AfB3 self delegated Token from the Token contract address 0x35a24F28f846DB57F13B534799659824A81f31FF according to the transaction 0xaa2206c9fe6b12353b57ad33464aabe5a2ff0b3cd66cb58bebe0aa9a206eb3d2
Votes after self delegation:
The vote After self delegation is 100.0

---------------------------CONTRACT TOKEN - TRANSFERT---------------------------

Account 0xc8e653ea3F2245C640506659180a3F2a2189AfB3 has 92.0 voting powers after transferring to 0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44 at the block 3524791
Account 0xc8e653ea3F2245C640506659180a3F2a2189AfB3 has 87.0 voting powers after transferring to 0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd at the block 3524792

----------------CONTRACT TOKEN - SELF-DELEGATION - OTHER SIGNERS----------------

0xc8e653ea3F2245C640506659180a3F2a2189AfB3 delegated Token from the Token contract address 0x35a24F28f846DB57F13B534799659824A81f31FF to 0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd according to the transaction 0x0bcde289faf3e84db850aa785d11deec7273b50f1b0dc149f6d49fe81472dd20 at block 3524793
0xc8e653ea3F2245C640506659180a3F2a2189AfB3 delegated Token from the Token contract address 0x35a24F28f846DB57F13B534799659824A81f31FF to 0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44 according to the transaction 0xe3906c32ef1337faab14aa4abb6a053014daa9f934c7a6481c53838c2a276aef at block 3524794

-------------------------GET PAST VOTE FROM LAST BLOCK-------------------------

Account 0xc8e653ea3F2245C640506659180a3F2a2189AfB3 has 0.0 units of voting power at block 3524788
Account 0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd has 0.0 units of voting power at block 3524788
Account 0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44 has 0.0 units of voting power at block 3524788

------------------------NEW SIGNER AFTER SELF-DELEGATION------------------------

Account 0xc8e653ea3F2245C640506659180a3F2a2189AfB3 has 87.0 units of voting power getVotes from transaction 0xe4c975b4f78718fc88bd510ece318c3b8b1cb68c78c3e75b4cbc5b814a0837fb at block 3524788
Account 0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd has 5.0 units of voting power getVotes from transaction 0x29dd43356aa229ac0027bbcff071616e10cc64d8e5e3e4cd7b6baab6a2487707 at block 3524788
Account 0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44 has 8.0 units of voting power getVotes from transaction 0x09ca04d3bd1776d31cad0814f8f50f28bb490f23e06db2f91aa80b1b94f0d254 at block 3524788
```
# casting votes first try

input
```
clear; yarn run ts-node --files scripts/3_BallotGiveVote.ts Ghost in the shell
```
```

------------------------------ACCOUNT - CONNECTION------------------------------

Connected to the address 0xc8e653ea3F2245C640506659180a3F2a2189AfB3
Connected to the block number 3524804
Balance is 361165706370458682 WEI

-----------------------------CONTRACT - ATTACHMENT-----------------------------


------------------------------------PREPARE------------------------------------

Account 0xc8e653ea3F2245C640506659180a3F2a2189AfB3 has 87.0 units of voting power getVotes from transaction 0xd668e15ff68fe1ca29a81d4ebbe93cffd7e2cd8a462b666ca87ef5b1452c16f0 at block 3524804
Account 0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd has 5.0 units of voting power getVotes from transaction 0x658c9365c04ef742fd6803733b025167f7755d1f82ee8d146a024ed5401e46b5 at block 3524804
Account 0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44 has 8.0 units of voting power getVotes from transaction 0xa6c1d33c030d1654442108ae258d921e74f9dfd597deda5a654ea258624f3864 at block 3524804

-----------------------------GAZ COST - MANAGEMENT-----------------------------

Connection to Tokenized Ballot Contract with Account 0xc8e653ea3F2245C640506659180a3F2a2189AfB3
┌───────────────────────┬──────────────────────────────────────────────┐
│        (index)        │                    Values                    │
├───────────────────────┼──────────────────────────────────────────────┤
│ ballotContractAddress │ '0x9267611856783B54c2d296F3594519bb37BFc63c' │
│    addressAccount     │ '0xc8e653ea3F2245C640506659180a3F2a2189AfB3' │
│      votingPower      │                    '87.0'                    │
│    winningProposal    │            '0.000000000000000001'            │
└───────────────────────┴──────────────────────────────────────────────┘
Connection to Tokenized Ballot Contract with Account 0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd 
┌───────────────────────┬──────────────────────────────────────────────┐
│        (index)        │                    Values                    │
├───────────────────────┼──────────────────────────────────────────────┤
│ ballotContractAddress │ '0x9267611856783B54c2d296F3594519bb37BFc63c' │
│    addressAccount     │ '0x3F5b2e7c258C7b29A03731c49217D3fA6d47beBd' │
│      votingPower      │                    '5.0'                     │
│    winningProposal    │            '0.000000000000000001'            │
└───────────────────────┴──────────────────────────────────────────────┘
Connection to Tokenized Ballot Contract with Account 0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44 
┌───────────────────────┬──────────────────────────────────────────────┐
│        (index)        │                    Values                    │
├───────────────────────┼──────────────────────────────────────────────┤
│ ballotContractAddress │ '0x9267611856783B54c2d296F3594519bb37BFc63c' │
│    addressAccount     │ '0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44' │
│      votingPower      │                    '8.0'                     │
│    winningProposal    │            '0.000000000000000001'            │
└───────────────────────┴──────────────────────────────────────────────┘
The winning proposition is in
```


