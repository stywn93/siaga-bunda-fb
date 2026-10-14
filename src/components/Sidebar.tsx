import { BarChart3, Building2, CalendarDays, CircleHelp, Contact, LayoutDashboard, Menu, Puzzle, Settings, Stethoscope, Users } from "lucide-react"

function Sidebar() {
    return (
        <aside>
            <header className="flex items-center gap-3 border-b border-default bg-neutral-primary-soft px-4 py-4 sm:hidden">
                <button type="button" className="inline-flex rounded-base border border-default p-2 text-body hover:bg-neutral-secondary-soft focus:outline-none focus:ring-4 focus:ring-brand-medium" aria-label="Buka menu">
                    <Menu className="h-5 w-5" />
                </button>
                <img src="/icon.png" alt="" className="h-8 w-8 rounded-base object-cover" />
                <span className="text-lg font-semibold tracking-tight text-heading">Siaga Bunda</span>
            </header>

            <div id="default-sidebar" className="fixed left-0 top-0 z-40 h-full w-72 -translate-x-full border-e border-default bg-neutral-primary-soft transition-transform sm:translate-x-0" aria-label="Sidebar">
                <div className="flex h-full flex-col overflow-y-auto px-4 py-5">
                    <header className="flex items-center gap-3 border-b border-default px-3 pb-6">
                        <img src="/icon.png" alt="" className="h-10 w-10 shrink-0 rounded-base object-cover" />
                        <span className="text-xl font-semibold tracking-tight text-heading">Siaga Bunda</span>
                    </header>

                    <nav className="flex flex-1 flex-col pt-6">
                        <div>
                            <p className="px-3 text-xs font-medium uppercase tracking-wider text-body">Main Menu</p>
                            <ul className="mt-3 space-y-1 font-medium">
                                <li>
                                    <a href="#" className="relative flex items-center gap-3 rounded-base border-s-4 border-teal-500 bg-teal-50 px-2.5 py-2.5 text-sm font-medium text-teal-600">
                                        <LayoutDashboard className="h-5 w-5" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <Stethoscope className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Dokter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <Users className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span className="flex-1">Profil Ibu</span>
                                        <span className="rounded-sm border border-default-medium bg-neutral-secondary-medium px-1.5 py-0.5 text-xs font-medium text-heading">Pro</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <CalendarDays className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Jadwal</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <Building2 className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Fasilitas Kesehatan</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <p className="px-3 text-xs font-medium uppercase tracking-wider text-body">Record</p>
                            <ul className="mt-3 space-y-1 font-medium">
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <BarChart3 className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Laporan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <Contact className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Kontak</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto pt-8">
                            <p className="px-3 text-xs font-medium uppercase tracking-wider text-body">Lainnya</p>
                            <ul className="mt-3 space-y-1 font-medium">
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <Settings className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Pengaturan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <Puzzle className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Integrasi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex items-center gap-3 rounded-base border-s-4 border-transparent px-2.5 py-2.5 text-sm font-medium text-body hover:bg-neutral-secondary-soft hover:text-heading">
                                        <CircleHelp className="h-5 w-5 transition-colors group-hover:text-teal-600" />
                                        <span>Pusat Bantuan</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
