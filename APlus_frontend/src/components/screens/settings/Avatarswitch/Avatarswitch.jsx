import styles from './Avatarswitch.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function AvatarSwitch({ info }) {
  const [base64, setBase64] = useState('')
  const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
          const base64Img = reader.result;
          setBase64(base64Img);
      };

      reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    const data = {
        base64string: base64,
        username: info.email
    };
    axios.put('https://localhost:7269/uploadavatar', data)
        .then(response => {
            location.reload();
        })
        .catch(error => {
            console.error('Ошибка загрузки аватара:', error);
        });
};

  return (
      <div className={styles.form}>
          <input className={`${styles.upload} input-file`} type="file" onChange={handleImageUpload} /><br />
          <button className={styles.btn} onClick={handleUpload}>Загрузить аватар</button>
      </div>
  );
}

export default AvatarSwitch