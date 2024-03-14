import styles from './Userpass.module.css'

function Userpass({passes}){

    return(
        <div className={styles.passesblock}>
            <h1 className={styles.passes}>Пропуски:<br /><span>{passes}</span></h1>
        </div>
    )
}

export default Userpass