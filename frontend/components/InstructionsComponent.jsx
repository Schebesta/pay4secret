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
      <body>
        <ConnectWalletComponent />
        <UploadSecretComponent />
        <PayForSecretComponent />
      </body>
      <div className={styles.footer}>
        Footer
      </div>
    </div>
  );
}
