import React, { useState, useEffect } from 'react';
import styles from './Infoswitch.module.css';
import { Usersservice } from '../../../../services/users.service';
import { useNavigate } from 'react-router-dom';

function Infoswitch({ info }) {

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    let navigate = useNavigate()

    useEffect(() => {
        setName(info.name); 
        setEmail(info.email);
        setLastname(info.lastname);
        setSurname(info.surname);
        setId(info.id)
    }, [info.id, info.name, info.lastname, info.surname, info.email]);
    const handleInputNameChange = (e) => {
        setName(e.target.value);
    }
    const handleInputLastnameChange = (e) => {
        setLastname(e.target.value);
    }
    const handleInputSurnameChange = (e) => {
        setSurname(e.target.value);
    }
    const handleInputEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleUpdate = async () => {
        await Usersservice.UpdateUserInfo(info.id, name, lastname, surname, email)
        navigate('/profile')
    }

    return (
        <div>
            <h1 className={styles.title}>Настройки информации</h1>
            <div className={styles.place}>
                <input
                    type="text"
                    value={name}
                    onChange={handleInputNameChange}
                />
                <input
                    type="text"
                    value={lastname}
                    onChange={handleInputLastnameChange}
                />
                <input
                    type="text"
                    value={surname}
                    onChange={handleInputSurnameChange}
                />
                <input
                    type="text"
                    value={email}
                    onChange={handleInputEmailChange}
                />
                <button className={styles.btn} onClick={handleUpdate}>Применить изменения</button>
            </div>
        </div>
    );
}

export default Infoswitch;