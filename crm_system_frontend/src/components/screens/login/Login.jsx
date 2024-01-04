import axios from "axios"
import { useState } from "react"
import '../../../assets/styles/global-styles.css'
import { redirect, useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const responce = await axios.post("https://localhost:7269/login", {
                username,
                password
            });
            const token = responce.data.token;
            localStorage.setItem('token', token);
            navigate("/");
        }catch(error){
            console.error('Ошибка: ', error)
        }
    }

    return(
        <div className='mainplace'>
            <input style={{color: 'black'}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input style={{color: 'black'}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Вход</button>
        </div>
    )
}

export default Login