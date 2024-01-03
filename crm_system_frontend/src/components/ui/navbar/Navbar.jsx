import styles from './Navbar.module.css'
import './Navbar.module.css'
import { FaHome, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidExit } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { Usersservice } from '../../../services/users.service';



function Navbar(){
    
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const data = await Usersservice.getAvatar("avatar2")
            setAvatar(data);
        }
        fetchData()
    }, [])

    return(
        <div className='navbar'>
            <ul className={styles.ulnavbar}>
                <li>
                    <a href='/profile'><div className={styles.navbaravatar}></div></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/'><FaHome style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink}><FaUser style={{
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
                    <a className={styles.navbarlink} href='/userdetail'><BiSolidExit style={{
                        marginTop: '2px',
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar