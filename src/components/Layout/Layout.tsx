import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }){
    return(
        <>
        <Header/>
        <main className="flex-grow">
            {children}
        </main>
        </>
    )
}

export default Layout;