import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

function AppShell() {
    return (
        <div className="min-h-dvh bg-neutral-secondary-soft">
            <Sidebar />
            <main className="flex min-h-dvh min-w-0 flex-1 flex-col sm:ml-72">
                <div className="min-h-0 flex-1">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default AppShell
