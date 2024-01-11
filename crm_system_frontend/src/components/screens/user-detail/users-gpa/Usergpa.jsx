import '../../../../assets/styles/global-styles.css'
import styles from './Usergpa.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Ratingservice } from '../../../../services/rating.service'
import { useParams } from 'react-router-dom'

function Usergpa(){
    const [gpa, setGpa] = useState(0)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const gpaData = await Ratingservice.getGpaById(id);
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

export default Usergpa