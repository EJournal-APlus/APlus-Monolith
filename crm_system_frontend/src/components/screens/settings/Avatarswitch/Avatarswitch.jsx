import styles from './Avatarswitch.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Avatarswitch({email}){
    
    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

    const handleUpload = (event) => {
        const reader = new FileReader();
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('username', email); 
        axios.post('https://localhost:7269/api/user/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then(response => {
          console.log('Image uploaded!', response.data);
          location.reload();
        }).catch(error => {
          console.error('Error uploading image', error);
        });
        reader.onload = () => {
            const base64Image = reader.result;
            console.log(base64Image)
            setImage(base64Image);
          };
      };

    return(
        <div className={styles.form}>
            <input className={styles.upload} type="file" onChange={handleFileChange} /><br />
            <button className={styles.btn} onClick={handleUpload}>Загрузить аватар</button>
        </div>
    )
}

export default Avatarswitch