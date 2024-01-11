import { useState, useEffect } from "react"
import { Usersservice } from "../../../../services/users.service"
import { Ratingservice } from "../../../../services/rating.service"
import styles from './Profilegrades.module.css'
import Gradeitem from "./grades-item/Gradeitem"

function Profilegrades(){

    const [grades, setGrades] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            const userData = await Usersservice.getUserInfo(data);
            const gradesData = await Ratingservice.getRageById(userData.id);
            setGrades(gradesData);
            console.log(gradesData)
        };
        fetchData()
    }, []);

    return(
        <div className={styles.gradecard}>
            <h1 className={styles.title}>Оценки</h1>
            {grades.length ? grades.map(grade => (
                <Gradeitem key={grade.id} grade={grade}/>
            )) : <div>Оценок нет</div>}
        </div>
    )
}

export default Profilegrades