import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import styles from './Usercard.module.css'

function Usercard({user}){
    return(
        <div key={user.id} className={styles.usercard}>
            <h1 className={styles.username}><span><FaUser/></span>{user.name} {user.lastname}</h1>
            <h1 className={styles.username}><span><MdAlternateEmail /></span>{user.email}</h1>
            <NavLink to={`/user/${user.id}`} className={styles.btn}>Подробнее</NavLink>
        </div>
    )
}

export default Usercard