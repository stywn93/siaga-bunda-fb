import { AlertTriangle, MapPin, Phone, ShieldCheck, UserCheck, Venus } from "lucide-react"

export interface ProfileDetailProps {
    motherName?: string
    maternalRisk?: string
    address?: string
    pic?: string
    gestationalAge?: string
    phone?: string
}

export default function ProfileDetail({
    motherName = "Ny. Fulanah",
    maternalRisk = "Sangat Tinggi",
    address = "Jl. Mawar No. 12, RT 02 / RW 04, Curah Jeru, Panji",
    pic = "Bdn. Siti Rahma, S.Tr.Keb",
    gestationalAge = "32 Minggu",
    phone = "+62 812-3456-7890",
}: ProfileDetailProps) {
    const normalizedRisk = maternalRisk.toLowerCase()
    const isHighRisk = normalizedRisk.includes("high") || normalizedRisk.includes("super high") || normalizedRisk.includes("tinggi") || normalizedRisk.includes("sangat tinggi")

    return (
        <article className="w-full max-w-2xl rounded-base border border-default bg-neutral-primary-soft p-5 shadow-xs sm:p-6">
            <header className="flex flex-col items-center gap-4 border-b border-default pb-5 sm:flex-row">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-brand-subtle bg-brand-softer text-fg-brand">
                    <Venus className="h-10 w-10" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <div className="mb-1 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        <h1 className="text-xl font-bold tracking-tight text-heading sm:text-2xl">{motherName}</h1>
                        <span className={`inline-flex items-center gap-1 rounded-sm border px-2.5 py-0.5 text-xs font-semibold ${isHighRisk ? "border-danger-subtle bg-danger-softer text-fg-danger" : "border-brand-subtle bg-brand-softer text-fg-brand"}`}>
                            {isHighRisk ? <AlertTriangle className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}
                            {maternalRisk}
                        </span>
                    </div>
                    <p className="text-sm text-body">Usia Kehamilan: <span className="font-medium text-heading">{gestationalAge}</span></p>
                </div>
            </header>

            <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className={`rounded-base border p-3.5 ${isHighRisk ? "border-danger-subtle bg-danger-softer/40" : "border-default bg-neutral-secondary-soft"}`}>
                    <div className="mb-1 flex items-center gap-2">
                        <AlertTriangle className={`h-4 w-4 ${isHighRisk ? "text-fg-danger" : "text-fg-brand"}`} />
                        <span className="text-xs font-medium uppercase tracking-wider text-body">Risiko Kehamilan</span>
                    </div>
                    <p className={`text-base font-semibold ${isHighRisk ? "text-fg-danger" : "text-heading"}`}>{maternalRisk}</p>
                </div>

                <div className="rounded-base border border-default bg-neutral-secondary-soft p-3.5">
                    <div className="mb-1 flex items-center gap-2">
                        <UserCheck className="h-4 w-4 text-fg-brand" />
                        <span className="text-xs font-medium uppercase tracking-wider text-body">Penanggung Jawab (PIC)</span>
                    </div>
                    <p className="text-base font-semibold text-heading">{pic}</p>
                </div>

                <div className="rounded-base border border-default bg-neutral-secondary-soft p-3.5 sm:col-span-2">
                    <div className="mb-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-fg-brand" />
                        <span className="text-xs font-medium uppercase tracking-wider text-body">Alamat Domisili</span>
                    </div>
                    <p className="text-sm text-heading">{address}</p>
                </div>

                {phone && (
                    <div className="rounded-base border border-default bg-neutral-secondary-soft p-3.5 sm:col-span-2">
                        <div className="mb-1 flex items-center gap-2">
                            <Phone className="h-4 w-4 shrink-0 text-fg-brand" />
                            <span className="text-xs font-medium uppercase tracking-wider text-body">Kontak / No. Telepon</span>
                        </div>
                        <p className="text-sm text-heading">{phone}</p>
                    </div>
                )}
            </section>
        </article>
    )
}
