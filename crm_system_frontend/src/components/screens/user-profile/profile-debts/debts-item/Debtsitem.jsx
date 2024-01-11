import styles from '../Profiledebts.module.css'

function Debtsitem({debt}){
    return(
    <div key={debt.id} className={styles.debtitem}>
        <h1 className={styles.text}>{debt.lesson}</h1>
        <h1 className={styles.text}>{debt.date}</h1>
    </div>
    )
}

export default Debtsitem