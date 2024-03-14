import {useEffect, useState} from 'react'
import '../../../assets/styles/global-styles.css'
import { Usersservice } from '../../../services/users.service'
import { useNavigate } from 'react-router-dom'
import styles from './Adminpanel.module.css'
import Acceptuser from './accept-user-list/Acceptuser'

function Adminpanel(){
    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')
    const [users, setUsers] = useState([])

    let navigate = useNavigate(); 
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const userData = await Usersservice.getUserInfo(data);
            setInfo(userData);
            const waitingusers = await Usersservice.getWaitingUser();
            setUsers(waitingusers)
        };
        fetchData()
    }, [])
    
    return(
        <div className='mainplace'>
            {info.roleId == 2 && navigate('/')}
            <div className={styles.place}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Принять учеников</h1>
                    {users.length ? users.map(user => (
                        <Acceptuser key={user.id} user={user}/>
                    )): <h1>null</h1>}
                </div>
            </div>
        </div>
    )
}

export default Adminpanel