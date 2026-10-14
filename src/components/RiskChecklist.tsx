import { Check, ClipboardCheck } from "lucide-react"
import { useState } from "react"

type RiskItem = {
    id: number
    factor: string
    plan: string
    deadline: string
    status: "Belum dimulai" | "Berjalan"
    followUp: string
}

const riskItems: RiskItem[] = [
    { id: 1, factor: "Usia ibu <20 tahun atau >35 tahun", plan: "Konseling dan pemantauan lebih sering", deadline: "12 Okt 2026", status: "Berjalan", followUp: "Jadwalkan kunjungan ANC berikutnya" },
    { id: 2, factor: "Anemia pada kehamilan", plan: "Evaluasi tablet tambah darah dan pola makan", deadline: "15 Okt 2026", status: "Belum dimulai", followUp: "Periksa kadar Hb dan dokumentasikan hasil" },
    { id: 3, factor: "Tekanan darah tinggi", plan: "Pantau tekanan darah dan tanda bahaya", deadline: "10 Okt 2026", status: "Berjalan", followUp: "Koordinasikan pemeriksaan ke fasilitas kesehatan" },
    { id: 4, factor: "Riwayat komplikasi obstetri", plan: "Susun rencana persalinan dan rujukan", deadline: "20 Okt 2026", status: "Belum dimulai", followUp: "Konfirmasi transportasi dan pendamping" },
]

function RiskChecklist() {
    const [completedItems, setCompletedItems] = useState<number[]>([])
    const completedCount = completedItems.length

    const toggleCompleted = (id: number) => {
        setCompletedItems((items) => items.includes(id) ? items.filter((itemId) => itemId !== id) : [...items, id])
    }

    return (
        <article className="overflow-hidden rounded-base border border-default bg-neutral-primary-soft shadow-xs">
            <header className="flex flex-col gap-3 border-b border-default px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-base bg-brand-softer text-fg-brand">
                        <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-heading">Checklist risiko</h2>
                        <p className="mt-1 text-sm text-body">Rencana dan tindak lanjut faktor pemberat.</p>
                    </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-sm bg-brand-softer px-2.5 py-1 text-xs font-medium text-fg-brand sm:self-auto">
                    <Check className="h-3.5 w-3.5" />
                    {completedCount}/{riskItems.length} selesai
                </span>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full min-w-max text-left text-sm text-body rtl:text-right">
                    <caption className="sr-only">Checklist faktor risiko ibu</caption>
                    <thead className="bg-neutral-secondary-soft">
                        <tr>
                            <th scope="col" className="w-12 px-4 py-3 text-center"><span className="sr-only">Selesai</span></th>
                            <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-body">Faktor pemberat</th>
                            <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-body">Rencana tindak lanjut</th>
                            <th scope="col" className="whitespace-nowrap px-4 py-3 text-xs font-medium uppercase tracking-wider text-body">Batas akhir</th>
                            <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-body">Status</th>
                            <th scope="col" className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-body">Tindak lanjut</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-default">
                        {riskItems.map((item) => {
                            const isCompleted = completedItems.includes(item.id)
                            const status = isCompleted ? "Selesai" : item.status
                            const statusTone = status === "Selesai"
                                ? "border-success-subtle bg-success-softer text-fg-success"
                                : status === "Berjalan"
                                    ? "border-warning-subtle bg-warning-softer text-fg-warning"
                                    : "border-default-medium bg-neutral-secondary-medium text-heading"

                            return (
                                <tr key={item.id} className="bg-neutral-primary-soft hover:bg-neutral-secondary-soft">
                                    <td className="px-4 py-4 text-center">
                                        <input
                                            type="checkbox"
                                            checked={isCompleted}
                                            onChange={() => toggleCompleted(item.id)}
                                            aria-label={`Tandai ${item.factor} selesai`}
                                            className="h-4 w-4 rounded-sm border-default-medium bg-neutral-secondary-medium text-fg-brand focus:ring-2 focus:ring-brand"
                                        />
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-heading">{item.factor}</td>
                                    <td className="px-4 py-4">{item.plan}</td>
                                    <td className="whitespace-nowrap px-4 py-4 text-heading">{item.deadline}</td>
                                    <td className="px-4 py-4"><span className={`inline-flex rounded-sm border px-2.5 py-0.5 text-xs font-semibold ${statusTone}`}>{status}</span></td>
                                    <td className="px-4 py-4">{item.followUp}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </article>
    )
}

export default RiskChecklist
