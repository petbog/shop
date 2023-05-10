import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
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
                    products && products.slice(0, 5).map((item, id) =>
                        <div key={id} className={classes.box}>
                            <div className="">
                                <Link to={`/categories/${id}`}>
                                    <img className={classes.img} src={item.image} alt="" />
                                </Link>
                                <div className={classes.box_text}>
                                    <p className={classes.title_product}>{item.category.name}</p>
                                    <p className={classes.text_product}>{item.title}</p>
                                </div>
                                <div className={classes.info}>
                                    <div className={classes.box_price}>
                                        <div className={classes.new_price}>{Math.floor(item.price * 0.8)}$</div>
                                        <div className={classes.old_price}>{item.price}$</div>
                                    </div>
                                    <div className={classes.count_buyers}>{Math.floor(Math.random() * 20 + 1)} people purchased</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className={classes.button}>
                <div className={classes.button_inner}>See more</div>
            </div>
        </div>
    )
}

export default Product_top