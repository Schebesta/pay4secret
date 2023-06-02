import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';

export function GetTokenNumber() {
	const { data: signer } = useSigner();
	const [txData, setTxData] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [isLoadingAdress, setLoadingAddress] = useState(false);
	const [address, setAddress] = useState('');

	const handleInputChange = (event) => {
		setAddress(event.target.value);
	};

	const fetchData = () => {
		setLoadingAddress(true);
		setLoadingAddress(false);

		// Effectuez votre fetch avec l'URL contenant l'adresse entrée par l'utilisateur
		// Utilisez `address` dans votre URL de requête fetch
		// Mettez à jour le state `isLoading` lorsque les données sont récupérées
	};

	// console.log(signer._address)

	if (txData) return (
		<>
			<p>The account Token Number is {txData}</p>
			<p>for the address {address}</p>
		</>
	);

	if (isLoading) return (
		<>
			<p>Requesting tokens holder to be fetched for address {address}</p>
		</>
	);


	return (
		<>
			<p><input type="text" value={address} onChange={handleInputChange} /></p>
			<p><button onClick={fetchData}>Fetch Data</button></p>
			<p>get the token number of the address {address}</p>
			<p><button onClick={() => getTokenNumber(address, setLoading, setTxData)}>Get Token Address Holded</button></p>
		</>
	);

}

function getTokenNumber(address, setLoading, setTxData) {
	// console.log(signer?._address)
	setLoading(true);
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};
	console.log(`http://localhost:3001/get-token-number/${address}`)
	fetch(`http://localhost:3001/get-token-number/${address}`, requestOptions)
		.then(response => response.text())
		.then((response) => {
			setTxData(response);
			setLoading(false);
		});
}
