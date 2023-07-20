import styles from "../styles/PayForSecretComponent.module.css";

export default function PayForSecretComponent() {
  return (
    <div className={styles.field}>
      <button className={styles.payButton} data-content="Pay for Secret">Pay for Secret</button>
    </div>
  );
}
