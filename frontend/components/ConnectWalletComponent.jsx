import styles from "../styles/ConnectWalletComponent.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// export default function ConnectWalletComponent() {
//   return (
//     <div className={styles.field}>
//       <label htmlFor="wallet-address">Wallet Address</label>
//       <input type="text" id="wallet-address" placeholder="Wallet Address" />
//       <ConnectButton className={styles.connectButton} data-content="Connect Wallet">Connect Wallet</ConnectButton>
//     </div>
//   );
// }

export default function ConnectWalletComponent() {
  return (
    <div className={styles.field}>
      <ConnectButton className={styles.connectButton} data-content="Connect Wallet">Connect Wallet</ConnectButton>
    </div>
  );
}

