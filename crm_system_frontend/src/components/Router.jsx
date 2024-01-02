import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './screens/home/App'

function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<App/>} path='/'></Route>
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