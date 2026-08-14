import React from 'react'

const styles = {
  'Measured': 'border-blue-200 bg-blue-50 text-blue-700',
  'Manufacturer Data': 'border-violet-200 bg-violet-50 text-violet-700',
  'Literature-Based Estimate': 'border-amber-200 bg-amber-50 text-amber-800',
  'Local Egyptian Market Data': 'border-emerald-200 bg-emerald-50 text-emerald-700',
  'Data Required / To Be Validated': 'border-slate-200 bg-slate-50 text-slate-600',
  'Prototype Assumption — Not Empirically Validated': 'border-orange-200 bg-orange-50 text-orange-700',
}

export default function EvidenceBadge({ status }) {
  return <span className={`inline-flex max-w-full items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold leading-tight ${styles[status] || styles['Data Required / To Be Validated']}`}>{status}</span>
}
