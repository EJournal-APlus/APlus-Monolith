import Userinfo from '../users-info/Userinfo';
import styles from '../Userprofile.module.css'
import { Usersservice } from "../../../../services/users.service";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Usercard({info}){
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const userData = await Usersservice.getUserById(id);
        };
        fetchData()
    }, []);


    return(
    <div className={styles.usercard}>
        {info.avatar64 != null ? <div className={styles.avatar} style={{backgroundImage: `url(${info.avatar64})`}}></div> : 
            <div className={styles.avatar} style={{backgroundImage: `url(https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png)`}}></div>}
        <div style={{display: 'block'}}>
            <Userinfo info={info}/>
        </div>
    </div>
    )
}

export default Usercard