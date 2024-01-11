import { useEffect, useState } from 'react';
import '../../../assets/styles/global-styles.css'
import { Usersservice } from '../../../services/users.service';
import { useNavigate } from 'react-router-dom';
import styles from './Userprofile.module.css'
import Profilecard from './profile-card/Profilecard';
import Profilerating from './profile-rating/Profilerating';
import Profilegpa from './profile-gpa/Profilegpa';
import Profilepass from './profile-pass/Profilepass';
import Profileachievements from './profile-achievements/Profileachievements';
import Profiledebts from './profile-debts/Profiledebts';
import Profilegrades from './profile-grades/Profilegrades';

function Profile(){

    const [email, setEmail] = useState('')
    const [passes, setPasses] = useState(0)
    const [info, setInfo] = useState('')
    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate("/login")
    }

    useEffect(() => {
      const fetchData = async () => {
          const token = localStorage.getItem('token');
          const data = await Usersservice.getToken(token);
          setEmail(data)
      };
      fetchData()
  }, []);

    return(
        <div className='mainplace'>
            {email == null && goToLogin()}
            <div className={styles.profileplace}>
              <Profilecard/>
                <div className={styles.profileplacetwo}>
                    <Profilerating/>
                    <div className={styles.profileplacetwoblock}>
                        <Profilegpa/>
                        <Profilepass/>
                    </div>
                    <Profileachievements/>
                </div>
                <div className={styles.details}>
                    <Profiledebts/>
                    <Profilegrades/>
                </div>
            </div>
        </div>
    )
}

export default Profile