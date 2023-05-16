import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork  } from 'wagmi'

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					MyApp
				</h1>
			</header>
			<div className={styles.buttons_container}>
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
			<WalletInfo></WalletInfo>
		</>
	)
}


function WalletInfo() {
	const { data: signer, isError, isLoading } = useSigner();
	const { chain, chains } = useNetwork();
	if (signer) return (
		<>
			<p>Your account address is {signer._address}</p>
			<p>connected to the {chain.name} network </p>
			<button onClick={() => {}}> Sign</button>
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


function signMessage(signer, message) {
	signer.signMessage(message).then(
		(response) => {console.log(response)}, 
		(error) => {console.error(error)}
		)
}