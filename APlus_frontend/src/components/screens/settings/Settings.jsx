import { useEffect, useState } from 'react'
import '../../../assets/styles/global-styles.css'
import Avatarswitch from './Avatarswitch/Avatarswitch'
import styles from './Settings.module.css'
import { Usersservice } from '../../../services/users.service'
import { redirect, useNavigate } from 'react-router-dom'
import Infoswitch from './Infoswitch/Infoswitch'

function Settings(){

    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')
    let navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const userData = await Usersservice.getUserInfo(data);
            setInfo(userData);
        };
        fetchData()
    }, [])

    return(
        <div className='mainplace'>
            {email == null && navigate('/login')}
            <div className={styles.itemplace}>
                <div className={styles.item}><Avatarswitch info={info}/></div>
                <div className={styles.item}><Infoswitch info={info}/></div>
            </div>
        </div> 
    )
}

export default Settings