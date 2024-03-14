import Profileinfo from '../profile-info/Profileinfo';
import styles from '../Userprofile.module.css'
import { Usersservice } from "../../../../services/users.service";
import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
function Profilecard({info}){

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
        };
        fetchData()
    }, []);

    return(
    <div className={styles.usercard}>
        {info.avatar64 != null ? <div className={styles.avatar} style={{backgroundImage: `url(${info.avatar64})`}}></div> : 
            <div className={styles.avatar} style={{backgroundImage: `url(https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png)`}}></div>}
        <div style={{display: 'block'}}>
            <Profileinfo info={info}/>
            <div className={styles.btnplace}>
                <NavLink info={info} style={{textDecoration: 'none'}} className={styles.btn} to={'/settings'}>Изменить профиль</NavLink>
                {info.roleId != 2 && <NavLink style={{textDecoration: 'none'}} className={styles.btn} to={'/adminpanel'}>Админ панель</NavLink>}
            </div>
        </div>
    </div>
    )
}

export default Profilecard