import classes from "./Footer.module.css"
import logo from "../../img/LOGO 1.svg"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.logo}>
                <img className={classes.img} src={logo} alt="logo" />
            </div>
            <div className={classes.developed}>
                <p className={classes.text}>Developed by </p>
                <p className={classes.name}>Petrov</p>
            </div>
        </div>
    )
}

export default Footer