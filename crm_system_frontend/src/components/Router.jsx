import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './screens/home/App'
import Profile from './screens/user-profile/Profile'
import Login from './screens/login/Login'
import Userprofile from './screens/user-detail/Userprofile'
import Register from './screens/registration/Register'
import Users from './screens/all-users/Users'

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<App/>} path='/'></Route>
        <Route element={<Profile/>} path='/profile'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Userprofile/>} path='user/:id'></Route>
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