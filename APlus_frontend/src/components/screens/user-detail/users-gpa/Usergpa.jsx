import '../../../../assets/styles/global-styles.css'
import styles from './Usergpa.module.css'

function Usergpa({gpa}){
    return(
        <div className={styles.gpacard}>
            <h1 className={styles.gpa}>{gpa}</h1>
        </div>
    )
}

export default Usergpa