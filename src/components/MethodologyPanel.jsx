import React from 'react'
import { FlaskConical } from 'lucide-react'

export default function MethodologyPanel() {
  return <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10"><div className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10"><FlaskConical size={19}/></div><div><div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">Methodology</div><p className="max-w-4xl text-sm leading-7 text-slate-300">Impact values will be calculated from measured component mass, replacement cost, repair time, material composition, and verified lifecycle data.</p></div></div></div>
}
