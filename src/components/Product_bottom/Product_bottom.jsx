
import classes from '../Products/Products.module.css'

const Product_bottom = () => {
    return (
        <div className={classes.products}>
            <div className={classes.title}>
                <div className={classes.title_inner}>Less than 100$</div>
            </div>
            {/* <Products /> */}
            <div className={classes.button}>
                <div className={classes.button_inner}>See more</div>
            </div>
        </div>
    )
}

export default Product_bottom