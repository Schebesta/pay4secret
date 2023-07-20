import { useState, useRef } from 'react';
import styles from "../styles/UploadSecretComponent.module.css";

export default function UploadSecretComponent() {
  const [selectedFile, setSelectedFile] = useState();
  const [uploaded, setUploaded] = useState(false);
  const fileInput = useRef();

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Use this function to do something with the selected file, e.g., upload it somewhere
  const handleUpload = () => {
    if (!selectedFile) {
      console.log("Please select a file first");
      return;
    }

    // Here you can call a service to upload your file...
    console.log("File to upload:", selectedFile);

    // Set uploaded state to true and reset it after 5 seconds
    setUploaded(true);
    setTimeout(() => {
      setUploaded(false);
      setSelectedFile(null);
    }, 5000);
  };

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  return (
    <div className={styles.field}>
      <input 
        type="file" 
        onChange={handleChange} 
        style={{ display: "none" }} 
        ref={fileInput} 
      />
      <button 
        className="upload-button" 
        data-content="Upload Secret" 
        onClick={handleButtonClick}>Upload Secret</button>
      {uploaded && <p>File has been uploaded!</p>}
    </div>
  );
}
