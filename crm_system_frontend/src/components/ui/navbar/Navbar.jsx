import styles from './Navbar.module.css'
import './Navbar.module.css'
import { FaHome, FaUser } from "react-icons/fa";


function Navbar(){
    return(
        <div className='navbar'>
            <ul className={styles.ulnavbar}>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/'><FaHome style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/userdetail'><FaUser style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar