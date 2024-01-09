import { useParams } from 'react-router-dom'
import '../../../assets/styles/global-styles.css'

function Userdetail(){

    const {id} = useParams()

    return(
        <div className='mainplace'>
            <h1>Ученик {id}</h1>
        </div>
    )
    
}

export default Userdetail