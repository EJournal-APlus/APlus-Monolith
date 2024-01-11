import styles from '../Userprofile.module.css'
import { useState } from 'react';
import { Usersservice } from '../../../../services/users.service';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Userinfo(){

    const [info, setInfo] = useState('')
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const userData = await Usersservice.getUserById(id);
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