import { useState } from "react";
import { useEffect } from "react";
import styles from './Userpass.module.css'
import { Usersservice } from "../../../../services/users.service";
import { Ratingservice } from "../../../../services/rating.service";

function Profilepass(){

    const [pass, setPasses] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            const userData = await Usersservice.getUserInfo(data);
            const passedData = await Ratingservice.getPassById(userData.id);
            setPasses(passedData);
        };
        fetchData()
    }, []);

    return(
        <div className={styles.passesblock}>
            <h1 className={styles.passes}>Пропуски:<br /><span>{pass}</span></h1>
        </div>
    )
}

export default Profilepass