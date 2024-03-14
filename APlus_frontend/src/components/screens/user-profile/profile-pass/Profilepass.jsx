import { useState } from "react";
import { useEffect } from "react";
import styles from './Userpass.module.css'
import { Usersservice } from "../../../../services/users.service";
import { Ratingservice } from "../../../../services/rating.service";

function Profilepass({pass}){
    return(
        <div className={styles.passesblock}>
            <h1 className={styles.passes}>Пропуски:<br /><span>{pass}</span></h1>
        </div>
    )
}

export default Profilepass