import styles from "../styles/InstructionsComponent.module.css";
import { useRouter } from "next/router";
import ConnectWalletComponent from "./ConnectWalletComponent";
import UploadSecretComponent from "./UploadSecretComponent";
import PayForSecretComponent from "./PayForSecretComponent";
import ProductComponent from "./ProductComponents/ProductComponent";

export default function InstructionsComponent() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
      </header>
      <div className={styles.buttons_container}>
        <ProductComponent />
		</div>
			<div>
				<p><ConnectWalletComponent/></p>
			</div>
			<div>
				<p><UploadSecretComponent/></p>        
			</div>
			<div>
				<p><PayForSecretComponent/></p>
			</div>
		<div className={styles.footer}>
			Footer
		</div>
    </div>
  );
}
