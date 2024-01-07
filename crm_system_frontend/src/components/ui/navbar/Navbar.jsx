import styles from './Navbar.module.css'
import './Navbar.module.css'
import { FaHome, FaUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BiSolidExit } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { Usersservice } from '../../../services/users.service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Navbar({avatarName}){
    
    const [avatarImage, setAvatarImage] = useState(null);
    const [email, setEmail] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const data = await Usersservice.getToken(token);
            setEmail(data)
        }
        fetchData()
    }, [])

    // avatarName = email;

    // useEffect(() => {
    //     if(email != null && email != undefined){
    //         axios.get(`https://localhost:7269/getavatar?email=${email}`, { 
    //             responseType: 'arraybuffer' 
    //           })
    //           .then(response => {
    //             const imageType = response.headers['content-type']; 
    //             const imageData = new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '');
    //             const base64Image = `data:${imageType};base64,${btoa(imageData)}`; 
    //             setAvatarImage(base64Image); 
    //           })
    //           .catch(error => {
    //             console.error('Ошибка при получении аватара:', error);
    //           });
    //     }
    //   }, [avatarName]);   

    const imageBase64 = "base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyQ0E5QTQyM0Q5RjExRTQ4NTkxRTRDMTBFMEI2OTNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyQ0E5QTQzM0Q5RjExRTQ4NTkxRTRDMTBFMEI2OTNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjJDQTlBNDAzRDlGMTFFNDg1OTFFNEMxMEUwQjY5M0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjJDQTlBNDEzRDlGMTFFNDg1OTFFNEMxMEUwQjY5M0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCADIAMgDAREAAhEBAxEB/8QAeQABAQEBAQEAAAAAAAAAAAAAAAcFBgIEAQEAAAAAAAAAAAAAAAAAAAAAEAEAAQQBAwICBAcRAQAAAAAAAQIDBAUGERIHIRMxIkFhFAhR0XN0FRdXcYEyUmKSssIjsyQ0lLSlFjc2EQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzOS6nN22kydfhbK9qMq92e3sMeIm7b7LlNc9sT6fNFM0z9Ugjfk/jfPOG8MzeQY/Ptrl3cWqzTTYuRRRTPu3abc9ZiZn07uoN/T+Nub5+owc6vyJt6KsvHtX6qIptzFM3KIqmI9fo6gyef5fLsnzPxvheu5HmanCztT7l+9jzHWbtqMuubk0z8aq/YpifUHQ/qp5p+0fb/AMy3+MH3+ROV7Dx74zqzqb07Ta41FnDsZWTHrdv1/L712I+qJq6fTPoDB1/h/lW3wLGw5Jzzdfpe/bpuXaNdfjHxrdVUde2iimOk9OvxiKev4Ab/AAfiXkHjvIL1racmr5BxivFqjGjLp/xdrIi5R2d1c91Vce339au/4/QDMv8Ai3mtqxcuR5G28zRTNUR2W/ojr+EHIeJ9Jz7nHE43mTzzaYVyci7Y9m3FFdPS309etUx8eoLRxbS7DTaijBz9rf3OTTXXVOfkxEXKoqnrFM9JmPl+ANcAAAAAAAAAAAAAAEy+8f8A+R7f8pif7m2DuOKf/Laf8xxv7mkEV8o6/dbH7xXGMPSbL9EbO7qKvs+x9qm/7fb9uqr/ALOr5au6iJp/fB1n6vvNP7Sf+Mx/xg6nf8Fo5LwSOMchzKsvIrs2qb+zt0U265yLXSYv00R8sdao69v4PQHAYvHfvG8WxqcPU7XWcj1+NTFGLRmUzRf7KfSKZmfbn4fxrs/ug6Dx75W2m65FlcS5TpqtHyfFte/FmKu+zdtx06zRPr0/hdY+aqJj6QULN/yd/wDJ1/0ZBK/uv/8Al1H59kf1QVsAAAAAAAAAAAAAAAE88+6vZ7TxdtMLWYl7OzLlzGm3jY1uu9dqinIoqq6UURVVPSI6z6A7HjNq7Z45qrN6iq3dt4ePRct1xNNVNVNqmJpqifWJiQSDyZ/2DU+dePcrxOP7Pda7XaqbV6ddjXL3z3Ptlvs76aZoiqPepqmJn4A3/wBdm3/Z3yf/AENf4gbnLOR86p4lqd7xXSV5Gwu3rN7YaXLiLd+nFuWa5uW6oqmmqm5Tcmj4dZ+qY6g56z57mi3FvYcI5Hj58elWPbw/cp7vh0iuqq1VMdf5APPB9Fyjkfke/wCRt/rKtFi28P7Bp9Zenrk1UTPX3r0enZ6VVfLMdfX6ushU8ymqrEv00xM1TbqiIj1mZmJBNfu56fbanxxRibXCyNflxmX6/s+Vars3O2rt6VdlyKaukgqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==";



    const logout = () => {
        localStorage.removeItem('token');
        location.reload()
    }

    return(
        <div className='navbar'>
            <ul className={styles.ulnavbar}>
                <li>
                    <a href='/profile'>
                        <img src={"data:image/jpeg;" + imageBase64} />
                    </a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/'><FaHome style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/users'><FaUser style={{
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <a className={styles.navbarlink} href='/userdetail'><RxDashboard style={{
                        marginTop: '2px',
                        width: '30px',
                        height: '30px'
                    }}/></a>
                </li>
                <li className={styles.linavbar}>
                    <button onClick={logout} className={styles.navbarlink} href='/userdetail'><BiSolidExit style={{
                        marginTop: '2px',
                        width: '30px',
                        height: '30px',
                    }}/></button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar