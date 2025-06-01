import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }){
    return(
        <>
        <Header/>
        <main className="flex-grow bg-[#111827] text-white">
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout;