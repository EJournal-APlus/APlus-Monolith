import '../../../../assets/styles/global-styles.css'
import styles from './Usergpa.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Ratingservice } from '../../../../services/rating.service'
import { Usersservice }  from '../../../../services/users.service'

function Profilegpa(){
    const [gpa, setGpa] = useState(0)
    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const userData = await Usersservice.getUserInfo(data);
            setInfo(userData);
            const gpaData = await Ratingservice.getGpaById(userData.id);
            setGpa(gpaData);
        };
        fetchData()
    }, []);

    return(
        <div className={styles.gpacard}>
            <h1 className={styles.gpa}>{gpa}</h1>
        </div>
    )
}

export default Profilegpa