import Userinfo from '../users-info/Userinfo';
import styles from '../Userprofile.module.css'
import { Usersservice } from "../../../../services/users.service";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Usercard({info}){
    const [avatarImage, setAvatarImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const userData = await Usersservice.getUserById(id);
            const dataAvatar = await Usersservice.getAvatar(userData.email);
            setAvatarImage(dataAvatar);
        };
        fetchData()
    }, []);


    return(
    <div className={styles.usercard}>
        {avatarImage != null ? <div className={styles.avatar} style={{backgroundImage: `url(${avatarImage})`}}></div> : 
            <div className={styles.avatar} style={{backgroundImage: `url(https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png)`}}></div>}
        <div style={{display: 'block'}}>
            <Userinfo info={info}/>
        </div>
    </div>
    )
}

export default Usercard