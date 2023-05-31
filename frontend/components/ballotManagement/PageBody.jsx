import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';

function PageBody() {
	return (
		<>
			<div className={styles.header_container}>
				<WalletInfo></WalletInfo>
				<Profile></Profile>
				<RequestTokens></RequestTokens>
			</div>
		</>

	)
}