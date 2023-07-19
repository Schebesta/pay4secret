import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
// import { useSigner, useNetwork, useBalance } from 'wagmi';
// import { useState, useEffect } from 'react';
import WalletComponent from "./walletInfo/WalletInfo";
import { GetTokenNumber } from "./tokenManagement/GetTokenNumber";
import { MinterToken } from "./tokenManagement/RequestTokenMinted";
// import Profile from "./profile/Profile";
import { GetCastVoteEx1 } from "./ballotManagement/CastVotes";
// import { DelegateEx1 } from "./tokenManagement/DelegateBack";
import { DelegateEx2 } from "./tokenManagement/Delegate";
import { QueryResultComponent } from "./ballotManagement/QueryResult";
import ProductComponent from "./ProductComponents/ProductComponent";

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
				<h2 className={styles.header_container}>Wallet</h2>
				<WalletComponent></WalletComponent>
				<h2 className={styles.header_container}>Query Token Number</h2>
				<GetTokenNumber></GetTokenNumber>
				<h2 className={styles.header_container}>MintToken</h2>
				<MinterToken></MinterToken>
				<h2 className={styles.header_container}>Delegate</h2>
				<DelegateEx2></DelegateEx2>
				<h2 className={styles.header_container}>CastVotes</h2>
				<GetCastVoteEx1></GetCastVoteEx1>
				<h2 className={styles.header_container}>QueryResult</h2>
				<QueryResultComponent></QueryResultComponent>
				<ProductComponent></ProductComponent>
			</div>
			<div className={styles.footer}>
				Footer
			</div>
		</div>
	);
}

