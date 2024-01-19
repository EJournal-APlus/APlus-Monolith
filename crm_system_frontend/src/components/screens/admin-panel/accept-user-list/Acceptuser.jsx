import { useState, useEffect } from "react"
import styles from './Acceptuser.module.css'
import axios from "axios"

const Acceptuser = ({user}) => {
    
    const acceptUser = async () => {
        axios.put(`https://localhost:7269/updateuserstatus?userid=${user.id}`)
        location.reload()
    }

    return(
        <div key={user.id} className={styles.usercard}>
            <div className={styles.names}>
                <h1 className={styles.text}>{user.name}</h1>
                <h1 className={styles.text}>{user.lastname}</h1>
            </div>
            <div className={styles.btns}>
                <button value={user.id} style={{backgroundColor: 'green'}} onClick={acceptUser} className={styles.btn}>Принять</button>
                <button style={{backgroundColor: 'red'}} className={styles.btn}>Отклонить</button>
            </div>
        </div>
    )

}

export default Acceptuser