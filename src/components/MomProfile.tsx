import { CalendarDays, Form, MapPin, PenLine, Phone, ShieldAlert, ShieldCheck, Venus } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
    color?: string
    risk?: string
}

function MomProfile({ color = "#000000", risk = "normal" }: Props) {
    const isHighRisk = risk === "high"

    return (
        <article className="relative min-w-0 w-full max-w-sm rounded-lg border border-default bg-neutral-primary-soft p-5 shadow-xs transition-shadow hover:shadow-md sm:p-6">
            <header className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight text-heading">Profil Ibu</h2>
                <button type="button" className="inline-flex items-center justify-center rounded-base border border-default-medium p-2 text-body hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-4 focus:ring-brand-medium" aria-label="Edit profil ibu">
                    <PenLine className="h-5 w-5" />
                </button>
            </header>

            <div className="mt-7 flex flex-col items-center text-center">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl bg-neutral-secondary-soft text-fg-brand">
                    <Venus className="h-20 w-20" color={color} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-heading">Ibu Fulanah</h3>
                <p className="mt-1 text-base text-body">35 minggu</p>
                <span className={`mt-3 inline-flex items-center gap-1 rounded-sm border px-2.5 py-0.5 text-xs font-medium ${isHighRisk ? "border-danger-subtle bg-danger-softer text-fg-danger" : "border-brand-subtle bg-brand-softer text-fg-brand"}`}>
                    {isHighRisk ? <ShieldAlert className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}
                    {isHighRisk ? "Resiko Tinggi" : "Normal"}
                </span>
            </div>

            <div className="my-7 border-t border-default" />

            <dl className="space-y-5">
                <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-body" />
                    <div>
                        <dt className="text-sm text-body">Nomor Telepon</dt>
                        <dd className="mt-1 text-base font-medium text-heading">+62 812-3456-7890</dd>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-body" />
                    <div>
                        <dt className="text-sm text-body">Usia Kehamilan</dt>
                        <dd className="mt-1 text-base font-medium text-heading">35 minggu</dd>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-body" />
                    <div>
                        <dt className="text-sm text-body">Alamat</dt>
                        <dd className="mt-1 text-base font-medium leading-6 text-heading">Curah Jeru, Panji.</dd>
                    </div>
                </div>
            </dl>

            <div className="my-7 border-t border-default" />

            <div className="grid grid-cols-2 gap-3">
                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-base bg-neutral-secondary-medium px-4 py-3 text-sm font-medium text-body shadow-xs hover:bg-neutral-tertiary-medium hover:text-heading focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
                    <PenLine className="h-4 w-4" />
                    Edit
                </button>
                <Link to="/mother/1" className="inline-flex items-center justify-center gap-2 rounded-base bg-brand px-4 py-3 text-sm font-medium text-white shadow-xs hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium">
                    <Form className="h-4 w-4" />
                    Lihat Profil
                </Link>
            </div>
        </article>
    )
}

export default MomProfile
