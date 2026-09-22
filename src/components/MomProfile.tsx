import { UserRound, MapPin, Form } from "lucide-react"
type Props = {
    color?: string,
    risk?: string
}
function MomProfile({color = "#000000", risk = "normal"}: Props) {
    return (
        
        <>
            <div className="relative bg-neutral-primary-soft max-w-s w-full p-2 border border-default rounded-base shadow-xs">
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="absolute top-2 end-2 text-body hover:text-heading bg-neutral-primary-soft box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
                    <span className="sr-only">Open dropdown</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01" /></svg>
                </button>

                <div id="dropdown" className="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-36 block hidden">
                    <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Edit</a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Export Data</a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded-md">Delete</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <UserRound className="w-24 h-24 mb-6 rounded-full" color={color}/>

                    <span className={`inline-flex items-center ${risk === "high" ? "bg-danger-softer" : "bg-brand-softer"} border ${risk === "high" ? "border-danger-subtle" : "border-brand-subtle"} ${risk === "high" ? "text-dg-danger-strong" : "text-dg-brand-strong"} text-xs font-medium px-1.5 py-0.5 rounded-sm`}>
                        <svg className="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/></svg>
                        {risk === "high" ? "Resiko Tinggi" : "Normal"}
                    </span>
                    {/* <img className="w-24 h-24 mb-6 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" /> */}
                    <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">Ibu Fulanah</h5>
                    <span className="text-sm text-body">35 minggu</span>
                    <p className="text-body inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Curah Jeru, Panji.</span>
                    </p>
                    <div className="flex mt-4 md:mt-6 gap-4">
                        <button type="button" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            <Form className="size-3.5 mr-1.5"/>
                            Lihat Profil Risiko
                        </button>
                        <button type="button" className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Ikuti Perjalanan
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MomProfile