import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './screens/home/App'
import Userprofile from './screens/user-profile/Userprofile'
import Login from './screens/login/Login'
import Userdetail from './screens/user-detail/Userdetail'
import Register from './screens/registration/Register'
import Users from './screens/all-users/Users'

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<App/>} path='/'></Route>
        <Route element={<Userprofile/>} path='/profile'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Userdetail/>} path='user/:id'></Route>
        <Route element={<Register/>} path='/register'></Route>
        <Route element={<Users/>} path='/users'></Route>
        <Route path='*' element={<div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            marginTop: '200px',
            fontSize: '50px',
            color: 'black',
        }}>Not Found</div>}></Route>
    </Routes>
    </BrowserRouter>
}

export default Router