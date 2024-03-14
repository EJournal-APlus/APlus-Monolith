import styles from './Navbar.module.css'
import './Navbar.module.css'
import { FaHome, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidExit } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { Usersservice } from '../../../services/users.service';
import { BsPeopleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Navbar(){
    
    const [email, setEmail] = useState('')
    const [info, setInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const infoData = await Usersservice.getUserInfo(data);
            setInfo(infoData);
        }
        fetchData()
    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        location.reload()
    }

    return(
        <div className='navbar'>
            <div className={styles.ulnavbar}>
                <div>
                    <NavLink to='/profile'>
                        {email != null && info.avatar64 != null ? 
                            <div className={styles.navbaravatar} style={{backgroundImage: `url(${info.avatar64})`, backgroundSize: 'cover'}}></div>
                            : <div className={styles.navbaravatar} style={{backgroundImage: `url(https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png)`, backgroundSize: 'cover'}}></div>
                        }
                    </NavLink>
                </div>
                <div className={styles.linavbar}>
                    <NavLink className={styles.navbarlink} to='/'><FaHome style={{
                        width: '30px',
                        height: '30px'
                    }}/></NavLink>
                </div>
                <div className={styles.linavbar}>
                    <NavLink className={styles.navbarlink} to='/users'><BsPeopleFill style={{
                        width: '30px',
                        height: '30px'
                    }}/></NavLink>
                </div>
                <div className={styles.linavbar}>
                    <NavLink className={styles.navbarlink} to='/userdetail'><RxDashboard style={{
                        marginTop: '2px',
                        width: '30px',
                        height: '30px'
                    }}/></NavLink>
                </div>
                {email != null && 
                    <div className={styles.linavbar}>
                        <button onClick={logout} className={styles.navbarlink} to='/userdetail'><BiSolidExit style={{
                            marginTop: '2px',
                            width: '30px',
                            height: '30px',
                        }}/></button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar