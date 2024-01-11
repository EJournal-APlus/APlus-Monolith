import { DebtsService } from '../../../../services/debts.service';
import { Usersservice } from '../../../../services/users.service';
import Debtsitem from './debts-item/Debtsitem';
import styles from './Profiledebts.module.css'
import { useEffect, useState } from 'react';

function Profiledebts(){

    const [debts, setDebts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            const userData = await Usersservice.getUserInfo(data);
            const debtsData = await DebtsService.getDebtsById(userData.id);
            setDebts(debtsData);
            console.log(debtsData)
        };
        fetchData()
    }, []);

    return(
        <div className={styles.debtscard}>
            <h1 className={styles.title}>Пропуски</h1>
            {debts.length ? debts.map(debt => (
                <Debtsitem key={debt.id} debt={debt}/>
            )) : <div>Пропусков нет</div>}
        </div>
        
    )
}

export default Profiledebts