import { Venus, MapPin, UserCheck, AlertTriangle, Phone, ShieldCheck } from "lucide-react";

export interface ProfileDetailProps {
  motherName?: string;
  maternalRisk?: string;
  address?: string;
  pic?: string;
  gestationalAge?: string;
  phone?: string;
}

export default function ProfileDetail({
  motherName = "Ny. Fulanah",
  maternalRisk = "Sangat Tinggi",
  address = "Jl. Mawar No. 12, RT 02 / RW 04, Curah Jeru, Panji",
  pic = "Bdn. Siti Rahma, S.Tr.Keb",
  gestationalAge = "32 Minggu",
  phone = "+62 812-3456-7890",
}: ProfileDetailProps) {
  const normalizedRisk = maternalRisk.toLowerCase();
  const isHighRisk =
    normalizedRisk.includes("high") ||
    normalizedRisk.includes("super high") ||
    normalizedRisk.includes("tinggi") ||
    normalizedRisk.includes("sangat tinggi");

  return (
    <article className="w-full max-w-2xl bg-neutral-primary-soft border border-default rounded-base shadow-xs p-5 sm:p-6">
      {/* Header Profile */}
      <header className="flex flex-col sm:flex-row items-center gap-4 pb-5 border-b border-default">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-brand-softer border border-brand-subtle text-fg-brand">
          <Venus className="w-10 h-10" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
            <h1 className="text-xl sm:text-2xl font-bold text-heading tracking-tight">
              {motherName}
            </h1>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm text-xs font-semibold border ${
                isHighRisk
                  ? "bg-danger-softer border-danger-subtle text-fg-danger"
                  : "bg-brand-softer border-brand-subtle text-fg-brand"
              }`}
            >
              {isHighRisk ? (
                <AlertTriangle className="w-3.5 h-3.5" />
              ) : (
                <ShieldCheck className="w-3.5 h-3.5" />
              )}
              {maternalRisk}
            </span>
          </div>
          <p className="text-sm text-body">
            Usia Kehamilan: <span className="font-medium text-heading">{gestationalAge}</span>
          </p>
        </div>
      </header>

      {/* Detail Fields */}
      <section className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Maternal Risk */}
        <div
          className={`p-3.5 rounded-base border ${
            isHighRisk
              ? "bg-danger-softer/40 border-danger-subtle"
              : "bg-neutral-secondary-soft border-default"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle
              className={`w-4 h-4 ${isHighRisk ? "text-fg-danger" : "text-fg-brand"}`}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-body">
              Risiko Kehamilan
            </span>
          </div>
          <p
            className={`text-base font-semibold ${
              isHighRisk ? "text-fg-danger" : "text-heading"
            }`}
          >
            {maternalRisk}
          </p>
        </div>

        {/* PIC (Person In Charge) */}
        <div className="p-3.5 rounded-base border border-default bg-neutral-secondary-soft">
          <div className="flex items-center gap-2 mb-1">
            <UserCheck className="w-4 h-4 text-fg-brand" />
            <span className="text-xs font-medium uppercase tracking-wider text-body">
              Penanggung Jawab (PIC)
            </span>
          </div>
          <p className="text-base font-semibold text-heading">{pic}</p>
        </div>

        {/* Address */}
        <div className="p-3.5 rounded-base border border-default bg-neutral-secondary-soft sm:col-span-2">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-fg-brand shrink-0" />
            <span className="text-xs font-medium uppercase tracking-wider text-body">
              Alamat Domisili
            </span>
          </div>
          <p className="text-sm text-heading">{address}</p>
        </div>

        {/* Contact */}
        {phone && (
          <div className="p-3.5 rounded-base border border-default bg-neutral-secondary-soft sm:col-span-2">
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-fg-brand shrink-0" />
              <span className="text-xs font-medium uppercase tracking-wider text-body">
                Kontak / No. Telepon
              </span>
            </div>
            <p className="text-sm text-heading">{phone}</p>
          </div>
        )}
      </section>
    </article>
  );
}
