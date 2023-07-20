import styles from "../styles/UploadSecretComponent.module.css";

// export default function UploadSecretComponent() {
//   return (
//     <div className={styles.field}>
//       <label htmlFor="secret-price">Price of Secret</label>
//       <input type="text" id="secret-price" placeholder="Price of Secret" />
//       <button className={styles.uploadButton} data-content="Upload Secret">Upload Secret</button>
//     </div>
//   );
// }

export default function UploadSecretComponent() {
  return (
    <div className={styles.field}>
      <button className="upload-button" data-content="Upload Secret">Upload Secret</button>
    </div>
  );
}

