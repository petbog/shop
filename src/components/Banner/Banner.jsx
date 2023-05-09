import classes from "./Banner.module.css"
import kross from "../../img/image 4.png"
import ps from "../../img/image 3.png"
import salle from "../../img/Rectangle 14.png"

const Banner = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.box_text}>
                <p className={classes.title}>NEW YEAR<br /> <p className={classes.title_bold}>SALE</p> </p>
                <div className={classes.buttom}>See more</div>
                <img className={classes.img_kross} src={kross} alt="" />
                <img className={classes.img_ps} src={ps} alt="" />
            </div>
            <div className={classes.box_img}>
                <img className={classes.img_salle} src={salle} alt="" />
                <div className={classes.box_title}>
                    <div className={classes.text_salle}>save up to <span className={classes.text_color}> 50%</span> off</div>
                </div>
            </div>
        </div>
    )
}

export default Banner