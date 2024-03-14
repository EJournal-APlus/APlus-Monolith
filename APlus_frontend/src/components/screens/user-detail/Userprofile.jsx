import { useParams } from 'react-router-dom'
import styles from './Userprofile.module.css'
import Usercard from './users-card/Usercard'
import Userrating from './users-rating/Userrating'
import Usergpa from './users-gpa/Usergpa'
import Userpass from './users-pass/Userpass'
import Usersachievements from './users-achievements/Usersachievements'
import Usersdebts from './users-debts/Usersdebts'
import Usersgrades from './users-grades/Usersgrades'
import { useEffect, useState } from 'react'
import { DebtsService } from '../../../services/debts.service'
import { Ratingservice } from '../../../services/rating.service'
import { Usersservice } from '../../../services/users.service'

function Userprofile(){

    const {id} = useParams()
    const [debts, setDebts] = useState([])
    const [grades, setGrades] = useState([])
    const [passes, setPasses] = useState(0)
    const [gpa, setGpa] = useState(0)
    const [info, setInfo] = useState([])
    const [rating, setRating] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            const gpaData = await Ratingservice.getGpaById(id);
            setGpa(gpaData)
            const passData = await Ratingservice.getPassById(id)
            setPasses(passData);
            const gradeData = await Ratingservice.getRageById(id)
            setGrades(gradeData);
            const debtsData = await DebtsService.getDebtsById(id);
            setDebts(debtsData);
            const infoData = await Usersservice.getUserById(id);
            setInfo(infoData)
            const ratingData = await Ratingservice.getRatingById(id)
            setRating(ratingData)
        };
        fetchData()
    }, [id])

    return(
        <div className='mainplace'>
            <div className={styles.profileplace}>
              <Usercard info={info}/>
            <div className={styles.profileplacetwo}>
                <Userrating rating={rating}/>
                <div className={styles.profileplacetwoblock}>
                    <Usergpa gpa={gpa}/>
                    <Userpass passes={passes}/>
                </div>
                <Usersachievements/>
            </div>
            <div className={styles.details}>
                <Usersdebts debts={debts}/>
                <Usersgrades grades={grades}/>
            </div>
            </div>
        </div>
    )
}

export default Userprofile