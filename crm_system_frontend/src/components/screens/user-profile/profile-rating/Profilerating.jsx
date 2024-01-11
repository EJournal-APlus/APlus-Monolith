import styles from './Userrating.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Usersservice } from '../../../../services/users.service'
import { Ratingservice } from '../../../../services/rating.service'

function Profilerating(){

    const [rating, setRating] = useState([])
    const [email, setEmail] = useState('')
    const [info, setInfo] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
            const userData = await Usersservice.getUserInfo(data);
            setInfo(userData);
            const ratingData = await Ratingservice.getRatingById(userData.id);
            setRating(ratingData);
        };
        fetchData()
    }, []);


    return(
        <div className={styles.ratingcard}>
            <div className={styles.columnplace}>
                <div className={styles.column} style={{height: `${rating.numberOfTwos * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfTwos}</p>
                    <h1 className={styles.rating}>2</h1>
                </div>
                <div className={styles.columnTwo} style={{height: `${rating.numberOfTriplets * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfTriplets}</p>
                    <h1 className={styles.rating}>3</h1>
                </div>
                <div className={styles.columnThree} style={{height: `${rating.numberOfFours * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfFours}</p>
                    <h1 className={styles.rating}>4</h1>
                </div>
                <div className={styles.columnFour} style={{height: `${rating.numberOfFives * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfFives}</p>
                    <h1 className={styles.rating}>5</h1>
                </div>
            </div>
        </div>    
    )
}
export default Profilerating