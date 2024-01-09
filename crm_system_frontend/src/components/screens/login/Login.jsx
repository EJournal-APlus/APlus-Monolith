import axios from "axios"
import { useEffect, useState } from "react"
import '../../../assets/styles/global-styles.css'
import { redirect, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from './Login.module.css'

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('Поле не может быть пустым!');
    const [usernameFalse, setUsernameFalse] = useState(false);
    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate();

    
    useEffect(() => {
        if(usernameError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    })

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
        
        if(e.target.value <= 0 ){
            setUsernameError('Поле не может быть пустым!');
        }else{
            setUsernameError('')
        }
    }

    const blurHandler = (e) =>{
        switch(e.target.name){
            case 'username':
                setUsernameFalse(true)
                break;
        }
    }

    const handleLogin = async () => {
        try{
            const responce = await axios.post("https://localhost:7269/login", {
                username,
                password
            });
            const token = responce.data.token;
            localStorage.setItem('token', token);
            navigate('/');
            location.reload()
        }catch(error){
            console.error('Ошибка: ', error)
        }
    }



    return(
        <div className='mainplace'>
            <div className={styles.loginplace}>
                {(usernameFalse && usernameError) && <label style={{color: 'red'}}>{usernameError}</label>}
                <input 
                onBlur={e => blurHandler(e)}
                placeholder="Введите email" 
                className={styles.input} 
                style={{color: 'white'}} type="text" 
                value={username} 
                name='username'
                onChange={handleChangeUsername} />
                <input placeholder="Введите пароль" className={styles.input} style={{color: 'white'}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className={styles.btns}>
                    <button 
                    disabled={!formValid} 
                    className={styles.btn} 
                    onClick={handleLogin}>
                        Вход
                    </button>
                    <NavLink className={styles.regbtn} to='/register'>Регистрация</NavLink>
                </div>  
            </div>
        </div>
    )
}

export default Login