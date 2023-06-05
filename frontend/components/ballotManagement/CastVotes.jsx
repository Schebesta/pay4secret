import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";
import { fetchBody } from "../hook/fetch";


export function GetCastVoteEx1() {
    return (
        <div>
                <GetCastVote></GetCastVote>
        </div>
    )
  }
  


function GetCastVote() {
    // // const { data: signer, isError, isLoading } = useSigner();
    // const { data: signer } = useSigner();
    // const [txData, setTxData] = useState(null);
    // const [isLoading, setLoading] = useState(false);
    // const [isLoadingAdress, setLoadingProposal] = useState(false);
    // const [Proposal, setProposal] = useState('');
    // const [VotedAmount, setVotedAmount] = useState('')

    // // const [txSigner, setTxSigner] = useState(null)
    // // setTxSigner(signer)

    const { data: signer } = useSigner();
    const [txData, setTxData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [DelegatedAddress, setDelegatedAddress] = useState('')
    const [Proposal, setProposal] = useState('');
    const [VotedAmount, setVotedAmount] = useState('')


    const handleInputProposal = (event) => {
        setProposal(event.target.value);
    };

    const handleInputVote = (event) => {
        setVotedAmount(event.target.value);
    };


    if (isLoading) return (
        <>
            <p>Send Voting Transaction ...</p>
        </>
    );


    if (txData) return (
        <>
            <p>The account Token Number is {txData}</p>
            <p>for the Proposal {Proposal}</p>
        </>
    );



    // list of arguments
    if (signer) return (
            <>
            <p><input type="text" value={Proposal} onChange={handleInputProposal} />Proposal Number</p>
            <p><input type="text" value={VotedAmount} onChange={handleInputVote} />Voted Amount</p>
            <p><button 
            onClick={() => getCastVote(
                signer,
                "cast-vote",
                Proposal,
                VotedAmount,
                setLoading,
                setTxData,
                )}>Send Vote
            </button></p>
            <p>{ }</p>
        </>
    );

}

function getCastVote(
    signer,
    requestPath,
    Proposal,
    VotedAmount,
    setLoading,
    setTxData,
    ) {

    setLoading(true);
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ SIGNER: signer, PROPOSAL: Proposal,
            VOTED_AMOUNT: VotedAmount  })
    };

	// const requestOptions = {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ SIGNER: signer, PROPOSAL: Proposal,
    //         VOTED_AMOUNT: VotedAmount,
    //     })
	// };

    fetch('http://localhost:3001/cast-vote', requestOptions)
        .then(response => response.json())
        .then((data) => {
            setTxData(data);
            setLoading(false);
        });
}