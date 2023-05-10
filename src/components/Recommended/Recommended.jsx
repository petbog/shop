import classes from './Recommended.module.css'
import { useSelector } from 'react-redux'

const Recommended = () => {
    const { products } = useSelector(state => state.products)
    console.log(products)
    return (
        <div className={classes.recommended}>
            <div className={classes.heading}>
                <div className={classes.heading_title}>Worth seeing</div>
            </div>
            <div className={classes.product_box}>
                {
                    products && products.slice(0, 5).map((item, id) =>
                        <div key={id} className={classes.container}>
                            <img className={classes.img} src={item.images} alt="" />
                            <p className={classes.description}>Sneakers</p>
                        </div>)
                }
            </div>


        </div>
    )
}

export default Recommended