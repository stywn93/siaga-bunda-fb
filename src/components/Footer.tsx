function Footer() {
    return (
        <>
            <footer className="fixed inset-x-0 bottom-0 z-30 m-4 bg-neutral-primary-soft rounded-base shadow-xs border border-default sm:left-64">
                <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-body sm:text-center">© 2023 <a href="https://dinkes.situbondokab.go.id/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
export default Footer
