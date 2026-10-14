import { Form, MapPin, MoreHorizontal, ShieldAlert, ShieldCheck, Venus } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
    color?: string
    risk?: string
}

function MomProfile({ color = "#000000", risk = "normal" }: Props) {
    const isHighRisk = risk === "high"

    return (
        <div className="relative min-w-0 w-full max-w-sm rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs transition-shadow hover:shadow-md">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="absolute end-3 top-3 inline-flex rounded-base border border-transparent p-1.5 text-body hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-4 focus:ring-brand-medium" type="button">
                <span className="sr-only">Open dropdown</span>
                <MoreHorizontal className="h-5 w-5" />
            </button>

            <div id="dropdown" className="z-10 hidden w-36 rounded-base border border-default-medium bg-neutral-primary-medium shadow-lg">
                <ul className="p-2 text-sm font-medium text-body" aria-labelledby="dropdownButton">
                    <li><a href="#" className="inline-flex w-full items-center rounded-base p-2 hover:bg-neutral-tertiary-medium hover:text-heading">Edit</a></li>
                    <li><a href="#" className="inline-flex w-full items-center rounded-base p-2 hover:bg-neutral-tertiary-medium hover:text-heading">Export Data</a></li>
                    <li><a href="#" className="inline-flex w-full items-center rounded-base p-2 text-fg-danger hover:bg-neutral-tertiary-medium">Delete</a></li>
                </ul>
            </div>

            <div className="flex flex-col items-center text-center">
                <Venus className="mb-4 h-20 w-20 rounded-full sm:mb-5 sm:h-24 sm:w-24" color={color} />

                <span className={`inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-xs font-medium ${isHighRisk ? "border-danger-subtle bg-danger-softer text-fg-danger" : "border-brand-subtle bg-brand-softer text-fg-brand"}`}>
                    {isHighRisk ? <ShieldAlert className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}
                    {isHighRisk ? "Resiko Tinggi" : "Normal"}
                </span>
                <h5 className="mb-0.5 mt-3 text-xl font-semibold tracking-tight text-heading">Ibu Fulanah</h5>
                <span className="text-sm text-body">35 minggu</span>
                <p className="inline-flex items-center justify-center gap-1 text-sm text-body">
                    <MapPin className="h-4 w-4" />
                    <span>Curah Jeru, Panji.</span>
                </p>
                <div className="mt-4 flex w-full flex-col gap-2 sm:mt-5 sm:w-auto sm:flex-row sm:gap-3">
                    <Link to="/mother/1" className="inline-flex w-full items-center justify-center rounded-base border border-transparent bg-brand px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-xs hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium sm:w-auto">
                        <Form className="mr-1.5 h-3.5 w-3.5" />
                        Lihat Profil Risiko
                    </Link>
                    <button type="button" className="inline-flex w-full items-center justify-center rounded-base border border-default-medium bg-neutral-secondary-medium px-4 py-2.5 text-sm font-medium leading-5 text-body shadow-xs hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-4 focus:ring-neutral-tertiary sm:w-auto">
                        Ikuti Perjalanan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MomProfile
