import { Search, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

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
            <form className="mx-auto max-w-md" onClick={() => setIsOpen(true)}>
                <label htmlFor="search" className="sr-only">Cari Ibu</label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-body">
                        <Search className="h-4 w-4" />
                    </div>
                    <input type="search" id="search" className="block w-full rounded-base border border-default bg-neutral-primary-soft p-3 pe-20 ps-9 text-sm text-heading shadow-xs outline-none placeholder:text-body focus:border-brand focus:ring-4 focus:ring-brand-medium" placeholder="Cari Ibu..." required />
                    <kbd className="pointer-events-none absolute end-1.5 bottom-2.5 rounded-sm border border-default-medium bg-neutral-secondary-soft px-1.5 py-0.5 text-xs text-body" aria-label={shortcutLabel}>{shortcutLabel}</kbd>
                </div>
            </form>

            {isOpen && createPortal(
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-24" onMouseDown={(event) => event.target === event.currentTarget && setIsOpen(false)} role="dialog" aria-modal="true" aria-label="Search">
                    <div className="flex w-full max-w-2xl items-center gap-2 rounded-base border border-default bg-neutral-primary-soft p-3 shadow-xl">
                        <form className="w-full" onSubmit={(event) => event.preventDefault()}>
                            <label htmlFor="modal-search" className="sr-only">Cari Ibu</label>
                            <div className="relative">
                                <input ref={inputRef} type="search" id="modal-search" className="block w-full rounded-base border border-default-medium bg-neutral-secondary-soft p-3 text-sm text-heading outline-none placeholder:text-body focus:border-brand focus:ring-4 focus:ring-brand-medium" placeholder="Cari Ibu..." autoComplete="off" required />
                            </div>
                        </form>
                        <button type="button" onClick={() => setIsOpen(false)} className="inline-flex shrink-0 items-center gap-1.5 rounded-base px-3 py-2 text-sm text-body hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-4 focus:ring-neutral-tertiary" aria-label="Close search">
                            <X className="h-4 w-4" />
                            Esc
                        </button>
                    </div>
                </div>,
                document.body,
            )}
        </>
    )
}

export default SearchBar
