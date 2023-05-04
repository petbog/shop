import classes from './Home.module.css'
import Footer from '../components/Footer/Footer';
import Header from './../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetCategories } from './../redux/slice/CategoriesSlice';
import Poster from './../components/Poster/Poster';
import Products from '../components/Products/Products';
import Recommended from '../components/Recommended/Recommended';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(GetCategories())
    }, [dispatch])

    return (
        <div className="">
            <Header />
            <div className={classes.main_container}>
                <Sidebar />
                <Poster/>
            </div>
            <Products />
            <Recommended />
            <Footer />
        </div>
    )
}

export default Home