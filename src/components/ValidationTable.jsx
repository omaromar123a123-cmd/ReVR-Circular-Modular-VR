import React from 'react'
import EvidenceBadge from './EvidenceBadge'
import { validationFields } from '../data/revrData'

export default function ValidationTable() {
  return <div className="panel overflow-hidden rounded-3xl">
    <div className="overflow-x-auto">
      <table className="min-w-[900px] w-full text-left">
        <thead className="bg-slate-950 text-xs font-bold text-white"><tr><th className="px-4 py-4">Validation Field</th><th className="px-4 py-4">Value</th><th className="px-4 py-4">Data Source</th><th className="px-4 py-4">Measurement Date</th><th className="px-4 py-4">Evidence Type</th><th className="px-4 py-4">Confidence</th></tr></thead>
        <tbody>{validationFields.map((row, index) => <tr key={row.field} className={index % 2 ? 'bg-white' : 'bg-slate-50/65'}><td className="px-4 py-4 text-sm font-bold text-slate-800">{row.field}</td><td className="px-4 py-4 text-sm text-slate-600">Data Required / To Be Validated</td><td className="px-4 py-4"><input className="w-48 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-400" placeholder="Add source" /></td><td className="px-4 py-4"><input className="w-36 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-emerald-400" placeholder="YYYY-MM-DD" /></td><td className="px-4 py-4"><EvidenceBadge status={row.evidence} /></td><td className="px-4 py-4"><select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs"><option>Not assessed</option><option>Low</option><option>Medium</option><option>High</option></select></td></tr>)}</tbody>
      </table>
    </div>
  </div>
}
