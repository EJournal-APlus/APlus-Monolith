import { useEffect, useState } from 'react';
import '../../../assets/styles/global-styles.css'
import { Usersservice } from '../../../services/users.service';

function Userprofile(){

    const [email, setEmail] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
        }
        fetchData()
    }, [])

    return(
        <div className='mainplace'>
            {email != null ? <h1>Hello, {email}</h1> : <h1>not auth</h1>}
        </div>
    )
}

export default Userprofile