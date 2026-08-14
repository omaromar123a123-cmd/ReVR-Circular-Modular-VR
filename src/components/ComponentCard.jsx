import React from 'react'
import { AlertTriangle, Clock3, Cpu, Package, Wrench } from 'lucide-react'
import EvidenceBadge from './EvidenceBadge'
import { EVIDENCE } from '../data/revrData'
import { displayValue } from '../lib/format'

function Info({ icon: Icon, label, children }) {
  return <div className="rounded-xl border border-slate-100 bg-slate-50 p-3"><div className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400"><Icon size={12} />{label}</div><div className="text-xs font-semibold text-slate-700">{children}</div></div>
}

export default function ComponentCard({ item }) {
  return (
    <div className="panel rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div><div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">Selected Module</div><h3 className="text-xl font-black text-slate-900">{item.name}</h3></div>
        <div className="h-10 w-10 rounded-2xl border border-slate-200" style={{ background: item.color }} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2"><EvidenceBadge status={item.replaceable ? EVIDENCE.prototype : EVIDENCE.required} /></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Info icon={AlertTriangle} label="Failure Scenario">{item.failure}</Info>
        <Info icon={Wrench} label="Replaceable?">{item.replaceable ? 'Yes — prototype module boundary' : 'Data Required'}</Info>
        <Info icon={Package} label="Estimated Material Mass">{displayValue(item.mass, 'g')}</Info>
        <Info icon={Cpu} label="Estimated Cost">{displayValue(item.cost, 'EGP')}</Info>
        <Info icon={Clock3} label="Repair Time">{displayValue(item.repairTime, 'min')}</Info>
        <Info icon={Wrench} label="Traditional Replacement">{item.traditional}</Info>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4"><div className="mb-1 text-[10px] font-black uppercase tracking-widest text-red-600">Traditional</div><p className="text-sm font-semibold leading-6 text-slate-700">{item.traditional}</p></div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"><div className="mb-1 text-[10px] font-black uppercase tracking-widest text-emerald-700">ReVR Modular</div><p className="text-sm font-semibold leading-6 text-slate-700">{item.modular}</p></div>
      </div>
      <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-xs leading-5 text-amber-900">{item.note}</div>
    </div>
  )
}
