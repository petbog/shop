import classes from './Home.module.css'
import Footer from '../components/Footer/Footer';
import Header from './../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetCategories } from './../redux/slice/CategoriesSlice';
import Poster from './../components/Poster/Poster';
import Recommended from '../components/Recommended/Recommended';
import Banner from '../components/Banner/Banner';
import Product_top from '../components/Product_top/Product_top'
import Product_bottom from '../components/Product_bottom/Product_bottom'
import { getProducts } from './../redux/slice/ProductsSlise';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(GetCategories())
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div className="">
            <Header />
            <div className={classes.container}>
                <Sidebar />
                <Poster/>
            </div>
            <Product_top />
            <Recommended />
            <Banner />
            <Product_bottom />
            <Footer />
        </div>
    )
}

export default Home