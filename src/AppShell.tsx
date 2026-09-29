import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"


function AppShell() {
    return(
        <div className="min-h-dvh">
            <Sidebar />
            <main className="min-w-0 pb-32 sm:ml-64">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default AppShell
