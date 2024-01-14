import Profileinfo from '../profile-info/Profileinfo';
import styles from '../Userprofile.module.css'
import { Usersservice } from "../../../../services/users.service";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Profilecard({info}){

    const [image, setImage] = useState(null);
    const [avatarImage, setAvatarImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            const dataAvatar = await Usersservice.getAvatar(data);
            setAvatarImage(dataAvatar);
        };
        fetchData()
    }, []);

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
    <div className={styles.usercard}>
        {avatarImage != null ? <div className={styles.avatar} style={{backgroundImage: `url(${avatarImage})`}}></div> : 
            <div className={styles.avatar} style={{backgroundImage: `url(https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png)`}}></div>}
        <div style={{display: 'block'}}>
            <Profileinfo info={info}/>
          <div className={styles.form}>
              <input className={styles.upload} type="file" onChange={handleFileChange} /><br />
              <button className={styles.btn} onClick={handleUpload}>Загрузить аватар</button>
          </div>
        </div>
    </div>
    )
}

export default Profilecard