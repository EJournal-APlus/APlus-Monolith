import { useParams } from 'react-router-dom'
import styles from './Userprofile.module.css'
import Usercard from './users-card/Usercard'
import Userrating from './users-rating/Userrating'
import Usergpa from './users-gpa/Usergpa'
import Userpass from './users-pass/Userpass'
import Usersachievements from './users-achievements/Usersachievements'

function Userprofile(){

    const {id} = useParams()

    return(
        <div className='mainplace'>
            <div className={styles.profileplace}>
              <Usercard/>
            <div className={styles.profileplacetwo}>
                <Userrating/>
                <div className={styles.profileplacetwoblock}>
                    <Usergpa/>
                    <Userpass/>
                </div>
                <Usersachievements/>
            </div>
            </div>
        </div>
    )
}

export default Userprofile