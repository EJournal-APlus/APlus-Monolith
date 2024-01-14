import { useParams } from 'react-router-dom';
import { DebtsService } from '../../../../services/debts.service';
import Debtsitem from './debts-item/Debtsitem.jsx'
import styles from './Profiledebts.module.css'
import { useEffect, useState } from 'react';

function Usersdebts({debts}){

    return (
        <div className={styles.debtscard}>
            <h1 className={styles.title}>Долги</h1>
            {debts.length ? debts.map(debt => (
                <Debtsitem key={debt.id} debt={debt} />
            )) : <div>Долгов нет</div>}
        </div>
    );
}

export default Usersdebts