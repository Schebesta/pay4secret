import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from "../styles/ConnectWalletComponent.module.css"

function ConnectWalletComponent() {
  const handleConnectWallet = () => {
    // Handle connect wallet logic here
    console.log('Connecting wallet...');
  };

  return (
    <div className={styles.field}>
      <ConnectButton className="connect-button" onClick={handleConnectWallet}>Connect</ConnectButton>
    </div>
  );
}

export default ConnectWalletComponent;
