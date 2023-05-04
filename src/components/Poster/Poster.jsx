import classes from './Poster.module.css'
import computer from '../../img/image 1.png'

const Poster = () => {
    return (
        <div className={classes.poster}>
            <div className={classes.box}>
                <h2 className={classes.title}>BIG SALE 20%</h2>
                <p className={classes.year}>the bestseller of 2022 </p>
                <p className={classes.text}>LENNON r2d2<br/>
                    with NVIDIA 5090 TI</p>
                <div className={classes.button}>Shop Now</div>
            </div>
            <img className={classes.computer} src={computer} alt="" />
        </div>
    )
}

export default Poster