import { useDispatch } from "react-redux"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import { GetCategories } from "../../redux/slice/CategoriesSlice"
import { useEffect } from "react"
import Poster from "../../components/Poster/Poster"
import classes from '../Home.module.css'
import Recommended from "../../components/Recommended/Recommended"
import Banner from "../../components/Banner/Banner"
import Product_top from "../../components/Product_top/Product_top"
import Product_bottom from "../../components/Product_bottom/Product_bottom"
import { getProducts } from './../../redux/slice/ProductsSlise';




const Categories = () => {
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(GetCategories())
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div className="">
            <Header />
            <div  className={classes.container}>
                <Sidebar />
                <Poster/>
            </div>
            <Product_top />
            <Recommended />
            <Banner />
            <Product_bottom  />
            <Footer />
        </div>
    )
}

export default Categories