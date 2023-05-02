import classes from "./Headre.module.css"
import logo from "../../img/LOGO 1.svg"
import user from "../../img/20544442431551942822 1.svg"
import search from "../../img/Vector.svg"
import hear from "../../img/17079954331574330926 1.svg"
import cart from "../../img/16051444861606988091 1.svg"


const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.img} src={logo} alt="logo" />
            </div>
            <div className={classes.user}>
                <div className={classes.user_img_box}>
                    <img className={classes.user_img} src={user} alt="user" />
                </div>
                <p className={classes.user_name}>Yana Tamkovich</p>
            </div>
            <div className={classes.search}>
                <input
                    className={classes.search_input}
                    type="search"
                    placeholder="Search for anything..."
                />
                <img className={classes.search_img} src={search} alt="search" />
            </div>
            <div className={classes.cart}>
                <div className={classes.cart_box}>
                    <img className={classes.cart_img} src={hear} alt="hear" />
                </div>
                <div className={classes.cart_box}>
                    <img className={classes.cart_img} src={cart} alt="cart" />
                    <span className={classes.cart_count}>2</span>
                </div>
            </div>
        </div>
    )
}

export default Header