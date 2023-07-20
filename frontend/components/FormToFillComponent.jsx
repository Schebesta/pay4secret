import React, { useState } from "react";
import styles from "../styles/UploadSecretComponent.module.css";
import secretStyles from "../styles/PayForSecretComponent.module.css";
import { AES } from "crypto-js";

export default function FormToFillComponent() {
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const encryptMessage = () => {
    const encrypted = AES.encrypt(message, "secret-key").toString();
    setEncryptedMessage(encrypted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary logic with the form data
    console.log("Wallet Address:", event.target.walletAddress.value);
    console.log("Price of Secret:", event.target.secretPrice.value);
    console.log("Message:", message);
    console.log("Encrypted Message:", encryptedMessage);

    // Clear the form fields and encrypted message
    event.target.reset();
    setMessage("");
    setEncryptedMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={secretStyles.field}>
          <label htmlFor="wallet-address">Wallet Address</label>
          <input type="text" id="wallet-address" name="walletAddress" placeholder="Wallet Address" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="secret-price">Price of Secret</label>
          <input type="text" id="secret-price" name="secretPrice" placeholder="Price of Secret" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" value={message} onChange={handleMessageChange}></textarea>
        </div>
        <button 
        className="upload-button"
        data-content="Encrypt Message"
        onClick={encryptMessage}>Submit Message</button>
      </form>

      {encryptedMessage && (
        <div>
          <h3>Encrypted Message:</h3>
          <p>{encryptedMessage}</p>
        </div>
      )}
    </div>
  );
}
