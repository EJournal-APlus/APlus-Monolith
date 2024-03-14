import { useEffect, useState } from 'react'
import styles from './Usercount.module.css'
import { InfoService } from '../../../../services/info.service'

const Usercount = () =>{

    const [count, setCount] = useState(0)

    useEffect(() => {
      const fetchData = async () => {
        const data = await InfoService.getCount()
        setCount(data)
      }
      fetchData()
    }, [])

    return(
        <div className={styles.block}>
            <h1 className={styles.title}>Количество обущающихся:</h1>
            <h1 className={styles.count}>
                {count}
            </h1>
        </div>
    )
}

export default Usercount