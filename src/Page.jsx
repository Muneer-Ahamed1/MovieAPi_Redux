import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Page = () => {
    return (
            <div className="Page relative dark:bg-slate-900 flex flex-col justify-between min-h-screen ">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
       
    )
}
export default Page;