import { useEffect, useState } from 'react';
import '../../../assets/styles/global-styles.css'
import { Usersservice } from '../../../services/users.service';
import { useNavigate } from 'react-router-dom';
import styles from './Userprofile.module.css'
import Usercard from './user-card/Usercard';
import Userrating from './user-rating/Userrating';

function Userprofile(){

    const [email, setEmail] = useState('')
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
              <Usercard/>
              <Userrating/>
            </div>
        </div>
    )
}

export default Userprofile