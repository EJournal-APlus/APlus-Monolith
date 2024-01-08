import axios from 'axios'
import styles from '../Userprofile.module.css'
import { useState } from 'react';
import { Usersservice } from '../../../../services/users.service';
import { useEffect } from 'react';

function Userinfo(){

    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const userData = await Usersservice.getUserInfo(data);
            setInfo(userData);
        };
        fetchData()
    }, []);

    return(
        <div className={styles.userinfo}>
            <h1 className={styles.nameuser}>{info.name} {info.lastname}</h1>
            <h1 className={styles.nameuser}>{info.email}</h1>
            {info.roleId == 1 && <h1 className={styles.role}>Администратор</h1>}
      </div>
    )
}

export default Userinfo