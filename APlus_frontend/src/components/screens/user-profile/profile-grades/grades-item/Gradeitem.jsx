import styles from '../Profilegrades.module.css'

function Gradeitem({grade}){
    return(
        <div className={styles.gradeitem}>
            <h1>{grade.lesson}</h1>
            <h1 className={styles.date}>{grade.date}</h1>
            <h1>{grade.grade}</h1>
        </div>
    )
}

export default Gradeitem