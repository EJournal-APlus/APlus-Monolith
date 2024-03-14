import { useEffect, useMemo, useState } from 'react'
import '../../../assets/styles/global-styles.css'
import { Usersservice } from '../../../services/users.service'
import styles from './Users.module.css'
import Usercard from './user-card/Usercard'

function Users(){

    const [users, setUsers] = useState([]); 

    useEffect(() =>{
        const fetchData = async () =>{
            const responce = await Usersservice.getAll();
            setUsers(responce);
        };
        fetchData()
    }, [])

    const acceptedUser = 
        users.filter( user => user.statusId == 2 && user.roleId == 2);

    return(
        <div className='mainplace'>
            <div className={styles.cardplace}>
                {acceptedUser.length ? acceptedUser.map(user => (
                    <Usercard key={user.id} user={user}/>
                    )) :
                    <p style={{
                    fontSize: '30px',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 auto'
                }}>null</p>
                }
            </div>
        </div>
    )
}

export default Users