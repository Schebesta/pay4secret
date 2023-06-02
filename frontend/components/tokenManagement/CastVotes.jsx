import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";
import { fetchBody } from "../hook/fetch";


// cast-vote

// {
//     "PROPOSAL": "string",
//     "VOTED_AMOUNT": "string"
//   }


export function GetCastVote() {
    const { data: signer } = useSigner();
    const [txData, setTxData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isLoadingAdress, setLoadingProposal] = useState(false);
    const [Proposal, setProposal] = useState('');
    const [VotedAmount, setVotedAmount] = useState('')

    const handleInputProposal = (event) => {
        setProposal(event.target.value);
    };

    const handleInputVote = (event) => {
        setVotedAmount(event.target.value);
    };

    const fetchData = () => {
        setLoadingProposal(true);
        setLoadingProposal(false);

        // Effectuez votre fetch avec l'URL contenant l'adresse entrée par l'utilisateur
        // Utilisez `Proposal` dans votre URL de requête fetch
        // Mettez à jour le state `isLoading` lorsque les données sont récupérées
    };

    // console.log(signer._Proposal)

    if (txData) return (
        <>
            <p>The account Token Number is {txData}</p>
            <p>for the Proposal {Proposal}</p>
        </>
    );

    if (isLoading) return (
        <>
            <p>Send Voting Transaction ...</p>
        </>
    );

    // list of arguments
    return (
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
                txData
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
    txData
    ) {

    setLoading(true);
    const baseUrl = 'http://localhost:3001/'
    console.log(`${baseUrl}${requestPath}`)
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            PROPOSAL: Proposal,
            VOTED_AMOUNT: VotedAmount
          })
	};
    console.log(requestOptions)

	fetch(`${baseUrl}${requestPath}`, requestOptions)
		.then(response => response.body) 
		.then((txData) => {
			setTxData(txData);
			setLoading(false);
		});
    console.log(txData)
}


