import Debtsitem from './debts-item/Debtsitem';
import styles from './Profiledebts.module.css'

function Profiledebts({debts}){
    return(
        <div className={styles.debtscard}>
            <h1 className={styles.title}>Долги</h1>
            {debts.length ? debts.map(debt => (
                <Debtsitem key={debt.id} debt={debt}/>
            )) : <div>Долгов нет</div>}
        </div>
        
    )
}

export default Profiledebts