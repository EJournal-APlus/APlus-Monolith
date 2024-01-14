import '../../../../assets/styles/global-styles.css'
import styles from './Usergpa.module.css'

function Profilegpa({gpa}){
    return(
        <div className={styles.gpacard}>
            <h1 className={styles.gpa}>{gpa}</h1>
        </div>
    )
}

export default Profilegpa