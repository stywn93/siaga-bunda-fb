import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"


function AppShell() {
    return(
        <div className="min-h-dvh">
            <Sidebar />
            <main className="min-w-0 sm:ml-64">
                <Outlet />
            </main>
        </div>
    )
}

export default AppShell