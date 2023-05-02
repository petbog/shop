import { useSelector } from "react-redux"
import classes from "./Sidebar.module.css"

const Sidebar = () => {
    const { item } = useSelector(state => state.categories)
    console.log(item)

    return (
        <div className={classes.sidebar}>
            <div className={classes.box}>
                <p className={classes.title}>CATEGORIES</p>
            </div>
            <div className="">
                {
                     item.map(item => <li>{item.name}</li>)
                }
            </div>
            <div className={classes.info}>
                <p className={classes.text}>Help</p>
                <p className={classes.text}>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Sidebar