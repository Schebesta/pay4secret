import styles from "../styles/InstructionsComponent.module.css";
import { useRouter } from "next/router";
import ConnectWalletComponent from "./ConnectWalletComponent";
import UploadSecretComponent from "./UploadSecretComponent";
import PayForSecretComponent from "./PayForSecretComponent";
import ProductComponent from "./ProductComponents/ProductComponent";
import FormToFillComponent from "./FormToFillComponent";
import { Encrypt } from "./Encryption";

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className="product-container">
			<div>
				<div>
					<ProductComponent />
				</div>
			</div>


		<div className="card-container">
				<div className="crypto-details">
					<p><ConnectWalletComponent /></p>
					<p><FormToFillComponent /></p>
					<p><UploadSecretComponent /></p>
					<p><PayForSecretComponent /></p>
				</div>
				<div>
					<p><Encrypt /></p>
				</div>
			</div>
		</div>
	);
}
