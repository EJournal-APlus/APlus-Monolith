import Profileinfo from '../profile-info/Profileinfo';
import styles from '../Userprofile.module.css'
import { Usersservice } from "../../../../services/users.service";
import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
function Profilecard({info}){
    const [avatarImage, setAvatarImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            const dataAvatar = await Usersservice.getAvatar(data);
            setAvatarImage(dataAvatar);
        };
        fetchData()
    }, []);

    return(
    <div className={styles.usercard}>
        {avatarImage != null ? <div className={styles.avatar} style={{backgroundImage: `url(${avatarImage})`}}></div> : 
            <div className={styles.avatar} style={{backgroundImage: `url(https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png)`}}></div>}
        <div style={{display: 'block'}}>
            <Profileinfo info={info}/>
            <NavLink style={{textDecoration: 'none'}} className={styles.btn} to={'/settings'}>Изменить профиль</NavLink>
        </div>
    </div>
    )
}

export default Profilecard