import { useDispatch } from "react-redux"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import { GetCategories } from "../../redux/slice/CategoriesSlice"
import { useEffect } from "react"
import Poster from "../../components/Poster/Poster"
import classes from '../Home.module.css'
import Products from "../../components/Products/Products"
import Recommended from "../../components/Recommended/Recommended"




const Categories = () => {
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(GetCategories())
    }, [dispatch])
    return (
        <div className="">
            <Header />
            <div  className={classes.container}>
                <Sidebar />
                <Poster/>
            </div>
            <Products />
            <Recommended />
            <Footer />
        </div>
    )
}

export default Categories