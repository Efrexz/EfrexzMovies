import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }){
    return(
        <>
        <Header/>
        <main className="flex-grow bg-[#111827] text-white">
            {children}
        </main>
        </>
    )
}

export default Layout;