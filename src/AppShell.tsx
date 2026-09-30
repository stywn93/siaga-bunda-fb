import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"


function AppShell() {
    return(
        <div className="flex min-h-dvh flex-col">
            <Sidebar />
            <main className="flex min-w-0 flex-1 flex-col sm:ml-64">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default AppShell
