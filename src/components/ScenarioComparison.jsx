import React from 'react'
import { ArrowDown, CheckCircle2, CircleSlash2 } from 'lucide-react'
import { motion } from 'framer-motion'

const traditional = ['Component Failure', 'Whole Device Replacement', 'Unused Components', 'E-Waste / Recovery']
const modular = ['Component Failure', 'Diagnosis', 'Replace One Module', 'Continue Using Device', 'Longer Product Life', 'End-of-Life Recovery']

function Flow({ title, items, tone }) {
  return <div className={`rounded-3xl border p-5 ${tone === 'traditional' ? 'border-red-100 bg-red-50/70' : 'border-emerald-100 bg-emerald-50/70'}`}>
    <div className="mb-5 flex items-center gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone === 'traditional' ? 'bg-red-600 text-white' : 'bg-emerald-700 text-white'}`}>{tone === 'traditional' ? <CircleSlash2 size={18}/> : <CheckCircle2 size={18}/>}</div><div><div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Scenario {tone === 'traditional' ? 'A' : 'B'}</div><h3 className="text-lg font-black text-slate-900">{title}</h3></div></div>
    <div className="space-y-2">{items.map((item, index) => <React.Fragment key={item}><motion.div initial={{ opacity: 0, x: tone === 'traditional' ? -8 : 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">{item}</motion.div>{index < items.length - 1 && <div className="flex justify-center"><ArrowDown size={16} className="text-slate-400" /></div>}</React.Fragment>)}</div>
  </div>
}

export default function ScenarioComparison() { return <div className="grid gap-5 lg:grid-cols-2"><Flow title="Traditional VR" items={traditional} tone="traditional"/><Flow title="ReVR Modular VR" items={modular} tone="modular"/></div> }
