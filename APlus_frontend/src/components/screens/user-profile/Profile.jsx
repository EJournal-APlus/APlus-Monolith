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
import { Ratingservice } from '../../../services/rating.service';
import { DebtsService } from '../../../services/debts.service';

function Profile(){

    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')
    const [grades, setGrades] = useState([])
    const [debts, setDebts] = useState([])
    const [pass, setPasses] = useState(0)
    const [gpa, setGpa] = useState(0)
    const [rating, setRating] = useState([])
    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate("/login")
    }

    useEffect(() => {
      const fetchData = async () => {
          const token = localStorage.getItem('token');
          const data = await Usersservice.getToken(token);
          setEmail(data)
          const userData = await Usersservice.getUserInfo(data);
          setInfo(userData);
          if(userData != null) {
            const gradesData = await Ratingservice.getRageById(userData.id);
            setGrades(gradesData);
            const debtsData = await DebtsService.getDebtsById(userData.id);
            setDebts(debtsData);
            const passedData = await Ratingservice.getPassById(userData.id);
            setPasses(passedData);
            const ratingData = await Ratingservice.getRatingById(userData.id);
            setRating(ratingData);
            const gpaData = await Ratingservice.getGpaById(userData.id);
            setGpa(gpaData);
          }
      };
      fetchData()
  }, []);

    return(
        <div className='mainplace'>
            {email == null && goToLogin()}
            <div className={styles.profileplace}>
              <Profilecard info={info}/>
                <div className={styles.profileplacetwo}>
                <Profilerating rating={rating}/>
                    <div className={styles.profileplacetwoblock}>
                        <Profilegpa gpa={gpa}/>
                        <Profilepass pass={pass}/>
                    </div>
                    <Profileachievements/>
                </div>
                <div className={styles.details}>
                    <Profiledebts debts={debts}/>
                    <Profilegrades grades={grades}/>
                </div>
            </div>
        </div>
    )
}

export default Profile