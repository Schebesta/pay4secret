import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "./walletInfo/WalletInfo";
import { GetTokenNumber } from "./tokenManagement/GetTokenNumber";
import { MinterToken } from "./tokenManagement/RequestTokenMinted";
import Profile from "./profile/Profile";
import { GetCastVote } from "./tokenManagement/CastVotes";

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
				<h2 className={styles.header_container}>TokenNumber</h2>
				<GetTokenNumber></GetTokenNumber>
				<h2 className={styles.header_container}>MintToken</h2>
				<MinterToken></MinterToken>
				<h2 className={styles.header_container}>CastVotes</h2>
				<GetCastVote></GetCastVote>

			</div>
			<div className={styles.footer}>
				Footer
			</div>
		</div>
	);
}

