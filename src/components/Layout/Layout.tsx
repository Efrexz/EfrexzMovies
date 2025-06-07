import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Header from "./Header";
import Footer from "./Footer";



function Layout(){
    return(
        <>
        <Header/>
        <main className="flex-grow bg-[#111827] text-white">
            <Suspense fallback={<LoadingSpinner />}>
                <Outlet />
            </Suspense>
        </main>
        <Footer/>
        </>
    )
}

export default Layout;