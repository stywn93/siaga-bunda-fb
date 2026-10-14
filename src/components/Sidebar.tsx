import { LayoutDashboard, Menu, Users } from "lucide-react"

function Sidebar() {
    return (
        <aside>
            <header className="flex items-center gap-3 border-b border-default bg-neutral-primary-soft px-3 py-3 sm:hidden">
                <button type="button" className="inline-flex rounded-base border border-default p-2 text-body hover:bg-neutral-secondary-soft focus:outline-none focus:ring-4 focus:ring-brand-medium" aria-label="Buka menu">
                    <Menu className="h-5 w-5" />
                </button>
                <img src="/siaga-bunda-icon.png" alt="" className="h-8 w-8 rounded-base object-cover" />
                <span className="text-lg font-semibold tracking-tight text-heading">Siaga Bunda</span>
            </header>

            <div id="default-sidebar" className="fixed top-0 left-0 z-40 h-full w-64 -translate-x-full border-e border-default bg-neutral-primary-soft transition-transform sm:translate-x-0" aria-label="Sidebar">
                <div className="flex h-full flex-col overflow-y-auto px-3 py-4">
                    <header className="flex items-center gap-3 border-b border-default px-2 pb-5">
                        <img src="/siaga-bunda-icon.png" alt="" className="h-10 w-10 shrink-0 rounded-base object-cover" />
                        <span className="text-lg font-semibold tracking-tight text-heading">Siaga Bunda</span>
                    </header>
                    <ul className="space-y-1 pt-5 font-medium">
                        <li>
                            <a href="#" className="group flex items-center gap-3 rounded-base bg-brand-softer px-3 py-2.5 text-sm font-medium text-fg-brand">
                                <LayoutDashboard className="h-5 w-5" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="group flex items-center gap-3 rounded-base px-3 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                <Users className="h-5 w-5 transition-colors group-hover:text-fg-brand" />
                                <span className="flex-1">Profil Ibu</span>
                                <span className="rounded-sm border border-default-medium bg-neutral-secondary-medium px-1.5 py-0.5 text-xs font-medium text-heading">Pro</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
