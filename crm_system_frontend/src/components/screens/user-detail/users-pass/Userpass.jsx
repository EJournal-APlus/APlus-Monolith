import { useEffect, useState } from "react";
import styles from './Userpass.module.css'
import { Usersservice } from "../../../../services/users.service";
import { Ratingservice } from "../../../../services/rating.service";
import { useParams } from "react-router-dom";

function Userpass(){

    const [pass, setPasses] = useState()
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const passedData = await Ratingservice.getPassById(id);
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

export default Userpass