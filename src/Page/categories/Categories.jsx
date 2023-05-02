import { useDispatch } from "react-redux"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import { GetCategories } from "../../redux/slice/CategoriesSlice"
import { useEffect } from "react"



const Categories = () => {
    const dispatch = useDispatch()

    useEffect(() => { 
        dispatch(GetCategories())
    }, [dispatch])
    return (
        <div className="">
            <Header />
            <div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    )
}

export default Categories