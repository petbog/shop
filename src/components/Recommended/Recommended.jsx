import classes from './Recommended.module.css'
import crocs from '../../img/Rectangle 21.png'

const Recommended =()=>{
    return(
        <div className={classes.recommended}>
            <div className={classes.heading}>
                <div className={classes.heading_title}>Worth seeing</div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={crocs} alt="" />
                <p className={classes.description}>Sneakers</p>
            </div>
        </div>
    )
}

export default Recommended