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
				<p><WalletComponent></WalletComponent></p>
				<p><GetTokenNumber></GetTokenNumber></p>
				<p><PageBody></PageBody></p>		
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
				<RequestTokens></RequestTokens>
				<Profile></Profile>
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
		<>
		  <h3>Today Profile</h3>
			<p>{data.username}</p>
			<p>{data.email}</p>
		</>
	);
}



