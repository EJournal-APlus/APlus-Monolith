import styles from './Usersachievements.module.css'
import { useState, useEffect } from 'react'

function Usersachievements(){

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const token = localStorage.getItem('token');
    //         const data = await Usersservice.getToken(token);
    //         const userData = await Usersservice.getUserInfo(data);
    //     };
    //     fetchData()
    // }, []);

    return(
        <div className={styles.achievementscard}>
            <h1>Достижения</h1>
            <h1>В процессе</h1>
        </div>
    )
}

export default Usersachievements