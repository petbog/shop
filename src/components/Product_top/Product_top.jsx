import { useSelector } from "react-redux"
import Products from "../Products/Products"
import classes from '../Products/Products.module.css'


const Product_top = () => {
    const { products } = useSelector(state => state.products)


    return (
        <div className={classes.products}>
            <div className={classes.title}>
                <div className={classes.title_inner}>Trending</div>
            </div>
            <div className={classes.products_box}>
                {
                    products && products.slice(0, 5).map((item,id) => <Products key={id} item={item} />)
                }
            </div>

            <div className={classes.button}>
                <div className={classes.button_inner}>See more</div>
            </div>
        </div>
    )
}

export default Product_top