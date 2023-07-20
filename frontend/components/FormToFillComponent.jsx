import React from "react";
import styles from "../styles/UploadSecretComponent.module.css";
import secretStyles from "../styles/PayForSecretComponent.module.css";

export default function FormToFillComponent() {
  return (
    <div>
      <div className={secretStyles.field}>
        <label htmlFor="wallet-address">Wallet Address</label>
        <input type="text" id="wallet-address" placeholder="Wallet Address" />
      </div>
      <div className={styles.field}>
        <label htmlFor="secret-price">Price of Secret</label>
        <input type="text" id="secret-price" placeholder="Price of Secret" />
      </div>
    </div>
  );
}
