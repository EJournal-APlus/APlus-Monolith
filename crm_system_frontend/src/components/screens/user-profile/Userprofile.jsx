import { useEffect, useState } from 'react';
import '../../../assets/styles/global-styles.css'
import { Usersservice } from '../../../services/users.service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Userprofile.module.css'
import Userinfo from './user-info/Userinfo';

function Userprofile(){

    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null);
    const [avatarImage, setAvatarImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate("/login")
    }

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
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
        <div className='mainplace'>
            {email != null ? <h1 className={styles.title}>Профиль</h1> : goToLogin()}
            <div className={styles.infoplace}>
              <div className={styles.avatar} style={{backgroundImage: `url(${avatarImage})`}}></div>
              <div style={{display: 'block'}}>
                  <Userinfo/>
                <div className={styles.form}>
                    <input className={styles.upload} type="file" onChange={handleFileChange} /><br />
                    <button className={styles.btn} onClick={handleUpload}>Загрузить аватар</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Userprofile