function Footer() {
    return (
        <footer className="border-t border-default bg-neutral-primary-soft">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-body sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <span>© 2026 <a href="https://dinkes.situbondokab.go.id/" className="font-medium text-heading hover:text-fg-brand hover:underline">Siaga Bunda™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-medium">
                    <li><a href="#" className="hover:text-heading hover:underline">About</a></li>
                    <li><a href="#" className="hover:text-heading hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-heading hover:underline">Licensing</a></li>
                    <li><a href="#" className="hover:text-heading hover:underline">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
