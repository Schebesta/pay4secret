import styles from "../styles/InstructionsComponent.module.css";
import { useRouter } from "next/router";
import ConnectWalletComponent from "./ConnectWalletComponent";
import UploadSecretComponent from "./UploadSecretComponent";
import PayForSecretComponent from "./PayForSecretComponent";
import ProductComponent from "./ProductComponents/ProductComponent";
import FormToFillComponent from "./FormToFillComponent";

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
				<div>
					<p><FormToFillComponent /></p>
				</div>
				<div>
					<p><ConnectWalletComponent /></p>
				</div>
				<div>
					<p><UploadSecretComponent /></p>
				</div>
				<div>
					<p><PayForSecretComponent /></p>
				</div>
			</div>
		</div>
	);
}
