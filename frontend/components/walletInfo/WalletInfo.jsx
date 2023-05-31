import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';

export default function WalletComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<div className={styles.buttons_container}>
				<WalletInfo></WalletInfo>
			</div>
		</div>
	);
}

function WalletInfo() {
	const { data: signer, isError, isLoading } = useSigner();
	const { chain, chains } = useNetwork();
	if (signer) return (
		<>
			<p>Your account address is {signer._address}</p>
			<p>Connected to the {chain.name} network </p>
			<button onClick={() => signMessage(signer, "Partez !")}>Sign</button>
			<WalletBalance></WalletBalance>
		</>
	)

	if (isLoading) return (
		<>
			<p>Wait a while, the wallet is loading</p>
		</>
	)

	return (
		<>
			<p>Connect a Wallet</p>
		</>
	)
}

function WalletBalance() {
	const { data: signer } = useSigner();
	const { data, isError, isLoading } = useBalance({
		address: signer._address
	});
	if (isLoading) return <div>Fetching balance...</div>

	if (isError) return <div>Error fetching balance</div>

	return (
		<div>
			Balance: {data?.formatted} {data?.symbol}
		</div>
	)
}

function signMessage(signer, message) {
	signer.signMessage(message).then(
		(response) => { console.log(response) },
		(error) => { console.error(error) }
	)
}