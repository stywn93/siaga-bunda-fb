import { useEffect, useRef, useState } from "react"

function SearchBar() {
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const shortcutLabel = navigator.platform.includes("Mac") ? "⌘ K" : "Ctrl K"

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false)
                return
            }

            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault()
                setIsOpen(true)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    useEffect(() => {
        if (isOpen) inputRef.current?.focus()
    }, [isOpen])

    return (
        <>
            <form className="max-w-md mx-auto" onClick={() => setIsOpen(true)}>
                <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-3 pe-20 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body" placeholder="Cari Ibu..." required />
                    <kbd className="pointer-events-none absolute end-1.5 bottom-2.5 rounded border border-default-medium px-1.5 py-0.5 text-xs text-body" aria-label={shortcutLabel}>{shortcutLabel}</kbd>
                </div>
            </form>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-24" onMouseDown={(event) => event.target === event.currentTarget && setIsOpen(false)} role="dialog" aria-modal="true" aria-label="Search">
                    <div className="flex w-full max-w-2xl items-center gap-2 rounded-base bg-neutral-primary-soft p-3 shadow-xl">
                        <form className="w-full" onSubmit={(event) => event.preventDefault()}>
                            <label htmlFor="modal-search" className="sr-only">Cari Ibu</label>
                            <div className="relative">
                                <input ref={inputRef} type="search" id="modal-search" className="block w-full p-3 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body" placeholder="Cari Ibu..." autoComplete="off" required />
                            </div>
                        </form>
                        <button type="button" onClick={() => setIsOpen(false)} className="shrink-0 rounded-base px-3 py-2 text-sm text-body hover:bg-neutral-secondary-medium focus:outline-none focus:ring-4 focus:ring-neutral-tertiary" aria-label="Close search">Esc</button>
                    </div>
                </div>
            )}

        </>
    )
}
export default SearchBar
