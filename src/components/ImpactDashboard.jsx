import React from 'react'
import { Clock3, Coins, Cuboid, HeartPulse, Recycle, Wrench } from 'lucide-react'
import EvidenceBadge from './EvidenceBadge'
import { metrics } from '../data/revrData'
import { displayValue } from '../lib/format'

const icons = { materialSaved: Cuboid, ewasteAvoided: Recycle, costSaved: Coins, lifetimeExtension: HeartPulse, repairTime: Clock3, replaceableComponents: Wrench }

export default function ImpactDashboard() {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {Object.entries(metrics).map(([key, metric]) => {
      const Icon = icons[key]
      return <div key={key} className="panel rounded-3xl p-5">
        <div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><Icon size={17} /></div><EvidenceBadge status={metric.evidence} /></div>
        <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.17em] text-slate-400">{metric.label}</div>
        <div className="mt-1 text-2xl font-black tracking-tight text-slate-900">{displayValue(metric.value, metric.unit)}</div>
        <p className="mt-2 text-xs leading-5 text-slate-500">{metric.note}</p>
      </div>
    })}
  </div>
}
