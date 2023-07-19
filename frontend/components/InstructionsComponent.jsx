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

				{/* <h2 className={styles.header_container}>Query Token Number</h2> */}
				{/* <GetTokenNumber></GetTokenNumber> */}
				
				<h2 className={styles.header_container}>MintToken</h2>
				
				<MinterToken></MinterToken>
				
				
				
				
				{/* <h2 className={styles.header_container}>Delegate</h2> */}
				{/* <DelegateEx2></DelegateEx2> */}
				{/* <h2 className={styles.header_container}>CastVotes</h2> */}
				{/* <GetCastVoteEx1></GetCastVoteEx1> */}
				{/* <h2 className={styles.header_container}>QueryResult</h2> */}
				{/* <QueryResultComponent></QueryResultComponent> */}
				{/* <ProductComponent></ProductComponent> */}
			</div>
			<body>
			<div class="product-container">
				<div class="image">
					<img src="https://media.discordapp.net/attachments/1070229591731478599/1131250736513167460/pepe-the-frog-clip-art-frog-removebg-preview.png?width=500&height=500" alt="Sad Rico" border="0" />
				</div>
				<div class="details">
					<h1 class="cost">$50</h1>
					<h3 class="title">Pepe's Secret</h3>
				</div>
			</div>

			<div class="card-container">
				<div class="crypto-details">
					<div class="field wallet-address">
						<label for="wallet-address">Wallet Address</label>
						<input type="text" id="wallet-address" placeholder="Wallet Address" />
					</div>
					<div class="field secret-price">
						<label for="secret-price">Price of Secret</label>
						<input type="text" id="secret-price" placeholder="Price of Secret" />
					</div>
					<div>
						<button class="connect-button" data-content="Connect Wallet">Connect Wallet</button>
						<button class="upload-button" data-content="Upload Secret">Upload Secret</button>
						<button class="pay-button" data-content="Pay for Secret">Pay for Secret</button>
					</div>
				</div>
			</div>
			</body>

			<div className={styles.footer}>
				Footer
			</div>
		</div>
	);
}

