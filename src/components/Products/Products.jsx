import classes from './Products.module.css'
import test from '../../img/Rectangle 16.png'


const Products = ({ item }) => {
    console.log(item)
    return (
        <div >
            <div className={classes.box}>
                <div className="">
                    <img className={classes.img} src={test} alt="" />
                    <div className={classes.box_text}>
                        <p className={classes.title_product}>Nike ZoomX 2023</p>
                        <p className={classes.text_product}>{ }</p>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.box_price}>
                            <div className={classes.new_price}>99$</div>
                            <div className={classes.old_price}>79$</div>
                        </div>
                        <div className={classes.count_buyers}>19 people purchased</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Products
