import MomProfile from "./MomProfile"
import SearchBar from "./SearchBar"

function Content() {
    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <div className="sticky top-0 z-30 flex justify-end border-b border-default bg-neutral-secondary-soft/95 px-4 py-3 backdrop-blur sm:px-6">
                <SearchBar />
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
