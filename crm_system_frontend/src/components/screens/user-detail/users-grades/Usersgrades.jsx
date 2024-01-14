import { useState, useEffect } from "react"
import { Ratingservice } from "../../../../services/rating.service"
import styles from './Profilegrades.module.css'
import Gradeitem from "./grades-item/Gradeitem"
import { useParams } from "react-router-dom"

function Usersgrades({grades}){

    return(
        <div className={styles.gradecard}>
            <h1 className={styles.title}>Оценки</h1>
            {grades.length ? grades.map(grade => (
                <Gradeitem key={grade.id} grade={grade}/>
            )) : <div>Оценок нет</div>}
        </div>
    )
}

export default Usersgrades