import { useSelector } from "react-redux"
import classes from "./Sidebar.module.css"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    const { item } = useSelector(state => state.categories)

    return (
        <div className={classes.sidebar}>
            <div className={classes.box}>
                <p className={classes.title}>CATEGORIES</p>
            </div>
            <div className={classes.list_box}>
                {
                    item.map(({ id, name }) =>
                        <li className={classes.list} key={id}>
                            <NavLink className={({ isActive }) =>
                                `${classes.categories} ${isActive ? classes.activ : ""}`} to={`/categories/${id}`}>{name}</NavLink>
                            {/* <NavLink className={classes.categories} to={`${id}`}>{name}</NavLink> */}
                        </li>)
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