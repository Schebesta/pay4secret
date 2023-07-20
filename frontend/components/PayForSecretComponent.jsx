import styles from "../styles/PayForSecretComponent.module.css";

export default function PayForSecretComponent() {
  return (
    <div className={styles.field}>
      <button className="pay-button" data-content="Pay for Secret">Pay for Secret</button>
    </div>
  );
}
