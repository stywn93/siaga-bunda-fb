import MomProfile from "./MomProfile"
import SearchBar from "./SearchBar"

function Content() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="sticky top-0 z-30 border-b border-default bg-neutral-secondary-soft/95 py-3 backdrop-blur">
                <SearchBar />
            </div>

            <div className="flex-1 p-4 sm:p-6">
                <div className="mx-auto max-w-7xl rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs sm:p-5">
                    <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <MomProfile color="#b91c1c" risk="high" />
                        <MomProfile />
                        <MomProfile />
                        <MomProfile />
                        <MomProfile />
                        <MomProfile />
                        <MomProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
