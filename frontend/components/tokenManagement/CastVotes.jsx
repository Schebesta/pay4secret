import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";


// cast-vote

// {
//     "PROPOSAL": "string",
//     "VOTED_AMOUNT": "string"
//   }


export function GetCastVote() {
	const { data: signer } = useSigner();
	const [txData, setTxData] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [isLoadingAdress, setLoadingProposal] = useState(false);
	const [Proposal, setProposal] = useState('');

	const handleInputChange = (event) => {
		setProposal(event.target.value);
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
			<p>Requesting tokens holder to be fetched for Proposal {Proposal}</p>
		</>
	);


	return (
		<>
			<p><input type="text" value={Proposal} onChange={handleInputChange} /></p>
			<p><button onClick={fetchData}>Send Vote</button></p>
			<p>get the token number of the Proposal {Proposal}</p>
			<p><button onClick={() => getCastVote()}>Get Token Proposal Holded</button></p>
		</>
	);

}

function getCastVote() {

}

