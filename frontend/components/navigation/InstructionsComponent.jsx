import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					MyVotingApp
				</h1>
			</header>
			<div className={styles.buttons_container}>
				<GetTokenNumber></GetTokenNumber>
				<WalletComponent></WalletComponent>
				<PageBody></PageBody>
			</div>
			<div className={styles.footer}>
				Footer
			</div>
		</div>
	);
}

function PageBody() {
	return (
		<>
			<div className={styles.header_container}>
				<Profile></Profile>
				<RequestTokens></RequestTokens>
			</div>
		</>

	)
}



function Profile() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://random-data-api.com/api/v2/users')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	return (
		<div>
			<h1>{data.username}</h1>
			<p>{data.email}</p>
		</div>
	);
}

function RequestTokens() {
	const { data: signer } = useSigner();
	const [txData, setTxData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	if (txData) return (
		<div>
			<p>Transaction completed!</p>
			<a href={"https://sepolia.etherscan.io/tx/" + txData.hash} target="_blank">{txData.hash}</a>
		</div>
	)
	if (isLoading) return (
			<div>
				<p>Requesting tokens to be minted...
				</p>
			</div>
			);
	return (	
		<div>
			<p>Request tokens to be minted</p>
			<button onClick={() => requestTokens(signer, "anything", setLoading, setTxData)}>Request tokens</button>
		</div>
		);
}

function requestTokens(signer, signature, setLoading, setTxData) {
	setLoading(true);

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ address: signer._address, mintValue:"1", signature: signature })
	};

	fetch('http://localhost:3001/request-tokens', requestOptions)
		.then(response => response.json())
		.then((data) => {
			setTxData(data);
			setLoading(false);
		});
}

function GetTokenNumber() {
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
		<div>
			<p>The account Token Number is {txData} for the address {address}
			</p>
		</div>
	);

	if (isLoading) return (
		<div>
	        <p>Requesting tokens holder to be fetched for address {address}</p>
      </div>
    );


	return (
		<div>
			<div>
				<input type="text" value={address} onChange={handleInputChange} />
				<button onClick={fetchData}>Fetch Data</button>
			</div>
			<p>get the token number of the address {address}</p>
			<button onClick={() => getTokenNumber(address, setLoading, setTxData)}>Get Token Address Holded</button>
			{/* <button onClick={() => getTokenNumber(signer, txData, setLoading, setTxData)}>Token MTK Holded</button> */}
		</div>
			
	);
	
}

function getTokenNumber(address, setLoading, setTxData) {
	// console.log(signer?._address)
	setLoading(true);
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};

	// fetch(`http://localhost:3001/get-token-number/${address}`, requestOptions)
	// .then(response1 => response1)
	// .then((response1) => {
	// 	setTxData1(response1);
	// 	setLoading(false);
	// });
	console.log(`http://localhost:3001/get-token-number/${address}`)
	fetch(`http://localhost:3001/get-token-number/${address}`, requestOptions)
		.then(response => response.text())
		.then((response) => {
			setTxData(response);
			setLoading(false);
		});
	
}



// function YourComponent1() {
// 	const [responseValue, setResponseValue] = useState('');
// 	const [isLoading, setLoading] = useState(false);
  
// 	useEffect(() => {
// 	  setLoading(true);
  
// 	  fetch(`http://localhost:3001/get-token-number/0x2471B1373F20f52e5ce6Cd0D08b4cE56a75acc44`, requestOptions)
// 		.then(response => response.text())
// 		.then((data) => {
// 		  setResponseValue(data);
// 		  setLoading(false);
// 		});
// 	}, []);
  
// 	if (isLoading) {
// 	  return <p>Loading...</p>;
// 	}
  
// 	return (
// 	  <div>
// 		<p>Response Value: {responseValue}</p>
// 	  </div>
// 	);
//   }
  