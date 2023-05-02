import classes from './Home.module.css'
import Footer from '../components/Footer/Footer';
import Header from './../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetCategories } from './../redux/slice/CategoriesSlice';

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
            </div>
            <Footer />
        </div>
    )
}

export default Home