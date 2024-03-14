import styles from './Register.module.css'
import '../../../assets/styles/global-styles.css'
import { useState } from 'react'
import { Usersservice } from '../../../services/users.service'

function Register(){

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleRegister = async () => {
        await Usersservice.register(name, lastname, surname, phone, email, password);
    }   

    return(
        <div className='mainplace'>
            <div className={styles.loginplace}>
                <input className={styles.input} onChange={(e) => setName(e.target.value)} value={name} placeholder='Введите имя'/>
                <input className={styles.input} onChange={(e) => setLastname(e.target.value)} value={lastname} placeholder='Введите фамилию'/>
                <input className={styles.input} onChange={(e) => setSurname(e.target.value)} value={surname} placeholder='Введите отчество'/>
                <input className={styles.input} onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Введите номер телефона'/>
                <input className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Введите email'/>
                <input className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Введите пароль"style={{color: 'white'}} type="text"/>
                <button className={styles.btn} onClick={handleRegister}>
                    Регистрация
                </button>
            </div>
        </div>
    )
}

export default Register