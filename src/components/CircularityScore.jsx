import React from 'react'
import { CircleHelp } from 'lucide-react'
import { circularityParameters } from '../data/revrData'
import { calculateCircularityScore } from '../lib/format'

export default function CircularityScore() {
  const score = calculateCircularityScore(circularityParameters)
  return <div className="panel rounded-3xl p-6">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
      <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-[10px] border-slate-100 bg-white text-center shadow-inner"><div className="text-3xl font-black text-slate-900">{score ?? '—'}</div><div className="text-[8px] font-black uppercase tracking-[0.16em] text-slate-400">/ 100</div></div>
      <div className="min-w-0 flex-1"><div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">Experimental Research Metric</div><h3 className="text-xl font-black text-slate-900">ReVR Prototype Circularity Index</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Not an internationally certified sustainability score. It becomes calculable only when the five parameters below have validated values.</p><div className="mt-4 flex flex-wrap gap-2">{circularityParameters.map((item) => <span key={item.id} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">{item.label}: <b className="text-slate-900">{item.value ?? 'Data Required'}</b></span>)}</div></div>
      <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600 lg:max-w-xs"><CircleHelp size={15} className="mt-0.5 shrink-0" /> Each parameter should be defined by a measurement protocol before it contributes to the index.</div>
    </div>
  </div>
}
