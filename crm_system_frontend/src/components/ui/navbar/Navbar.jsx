import styles from './Navbar.module.css'
import './Navbar.module.css'
import { FaHome, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidExit } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { Usersservice } from '../../../services/users.service';
import { useNavigate } from 'react-router-dom';


function Navbar(){
    
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const data = await Usersservice.getAvatar("avatar2")
            setAvatar(data);
        }
        fetchData()
    }, [])

    const logout = () => {
        const navigate = useNavigate();
        localStorage.removeItem('token');
        navigate("/");
    }

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
                    <a className={styles.navbarlink} href='/users'><FaUser style={{
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