import MomProfile from "./MomProfile"
import ProfileDetail from "./ProfileDetail"
import SearchBar from "./SearchBar"

export default function RiskProfile(){
    return(
        <div className="flex flex-1 flex-col">
        <div className="sticky top-0 z-30 shadow bg-neutral-100 py-2">
            <SearchBar/>
        </div>
        
        <div className="flex-1 p-4">
                <div className="p-4 border border-default border-dashed rounded-base">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                        <MomProfile color="#b91c1c" risk="high"/>
                        <ProfileDetail/>


                    </div>
                    <div className="flex items-center justify-center h-48 rounded-base bg-neutral-secondary-soft mb-4">
                        <p className="text-fg-disabled">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-48 rounded-base bg-neutral-secondary-soft mb-4">
                        <p className="text-fg-disabled">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
                            <p className="text-fg-disabled">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" /></svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-base bg-neutral-secondary-soft">
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
