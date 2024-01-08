import styles from './Navbar.module.css'
import './Navbar.module.css'
import { FaHome, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidExit } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { Usersservice } from '../../../services/users.service';
import { BsPeopleFill } from "react-icons/bs";

function Navbar({avatarName}){
    
    const [avatarImage, setAvatarImage] = useState(null);
    const [email, setEmail] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const dataAvatar = await Usersservice.getAvatar(data);
            setAvatarImage(dataAvatar);
        }
        fetchData()
    }, [avatarName])

    const logout = () => {
        localStorage.removeItem('token');
        location.reload()
    }

    return(
        <div className='navbar'>
            <ul className={styles.ulnavbar}>
                <li>
                    <a href='/profile'>
                        <div className={styles.navbaravatar} style={{backgroundImage: `url(${avatarImage})`, backgroundSize: 'cover'}}></div>
                    </a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/'><FaHome style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/users'><BsPeopleFill style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/userdetail'><RxDashboard style={{
                        marginTop: '2px',
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <button onClick={logout} className={styles.navbarlink} href='/userdetail'><BiSolidExit style={{
                        marginTop: '2px',
                        width: '30px',
                        height: '30px',
                    }}/></button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar