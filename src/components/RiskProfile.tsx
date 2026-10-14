
import ProfileDetail from "./ProfileDetail"
import SearchBar from "./SearchBar"

export default function RiskProfile(){
    return(
        <div className="flex min-h-0 flex-1 flex-col">
        <div className="sticky top-0 z-30 flex justify-end border-b border-default bg-neutral-secondary-soft/95 px-4 py-3 backdrop-blur sm:px-6">
            <SearchBar/>
        </div>
        
        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
                        <div className="lg:col-span-1">
                            <ProfileDetail />
                        </div>

                        <div className="lg:col-span-2">
                            <ProfileDetail/>
                        </div>
                        
                    </div>
                    <div className="mt-4 flex min-h-48 items-center justify-center rounded-base bg-neutral-secondary-soft">
                        <p className="text-fg-disabled">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                        </p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex min-h-48 items-center justify-center rounded-base bg-neutral-secondary-soft">
                        <p className="text-fg-disabled">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                        </p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex min-h-24 items-center justify-center rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}
