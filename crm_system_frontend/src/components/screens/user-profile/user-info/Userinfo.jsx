import styles from '../Userprofile.module.css'

function Userinfo(){
    return(
        <div className={styles.userinfo}>
            <h1 className={styles.nameuser}>Имя Фамилия</h1>
            <h1 className={styles.nameuser}>email@email.ru</h1>
      </div>
    )
}

export default Userinfo