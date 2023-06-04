// import * as React from 'react';
// import Router, { useRouter } from "next/router";
// import { useSigner } from 'wagmi';
// import { ethers, Contract } from 'ethers';
// import * as tokenJson from '../../assets/MyToken.json';
// import { useState, useEffect } from 'react';

// const contractAddressToken = "0x35a24F28f846DB57F13B534799659824A81f31FF"

// const contractAddressBallot = "0xc8e653ea3F2245C640506659180a3F2a2189AfB3"

// export function Telegator() {
//   return (
//       <div>
//               <Delegator></Delegator>
//       </div>
//   )
// }

// function Delegator() {
//   const [txData, setTxData] = useState();
//   const [isLoading, setLoading] = useState(false);
//   const { data: signer } = useSigner();
//   const [DelegatedAddress, setDelegatedAddress] = useState('')
  
//   const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY)

//   const handleInputDelegatedAddress = (event) => {
//     setDelegatedAddress(event.target.value);
//   };


//   const tokenContract = new ethers.Contract(
//     contractAddressToken,
//     tokenJson.abi,
//     provider
//   );

//     return (
//       <div>
//         <h1>Delegate voting power</h1>
//         <button onClick={() => delegate(signer, signer._address, tokenContract, setLoading, setTxData)}>Delegate</button>
//         {
//           isLoading ? <p>Delegating voting power...</p> : <p></p>
//         }
//         {
//           txData ? <p>Delegation is done {txData}</p> : <p></p>
//         }
//       </div>
//     )

// }

// function delegate(signer, address, tokenContract, setLoading, setTxData) {
//   setLoading(true);
//   tokenContract
//   .connect(signer)
//   .delegate(signer._address)
//    .then((data) => {
//     //  console.log("Delegation succesfully1");
//     setTxData(data);
//     //  console.log("Delegation succesfully2");
//     setLoading(false);
//     //  console.log("Delegation succesfully3");
//     console.log(data);
//    }).catch((err) => {
//     setError(err.reason); 
//     setLoading(false);
//     console.log(err);
//    });
// }