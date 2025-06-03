import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";



function Layout(){
    return(
        <>
        <Header/>
        <main className="flex-grow bg-[#111827] text-white">
            <Outlet />
        </main>
        <Footer/>
        </>
    )
}

export default Layout;