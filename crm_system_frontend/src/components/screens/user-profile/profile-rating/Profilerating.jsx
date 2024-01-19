import styles from './Userrating.module.css'

function Profilerating({raing}){

    return(
        <div className={styles.ratingcard}>
            <div className={styles.columnplace}>
                <div className={styles.column} style={{height: `${rating.numberOfTwos * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfTwos}</p>
                    <h1 className={styles.rating}>2</h1>
                </div>
                <div className={styles.columnTwo} style={{height: `${rating.numberOfTriplets * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfTriplets}</p>
                    <h1 className={styles.rating}>3</h1>
                </div>
                <div className={styles.columnThree} style={{height: `${rating.numberOfFours * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfFours}</p>
                    <h1 className={styles.rating}>4</h1>
                </div>
                <div className={styles.columnFour} style={{height: `${rating.numberOfFives * 15}px`}}>
                    <p className={styles.ratingcount}>Количество: {rating.numberOfFives}</p>
                    <h1 className={styles.rating}>5</h1>
                </div>
            </div>
        </div>    
    )
}
export default Profilerating