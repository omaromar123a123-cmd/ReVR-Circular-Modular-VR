import React from 'react'

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">{eyebrow}</div>}
        <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      </div>
      {children && <div className="max-w-xl text-sm leading-6 text-slate-500">{children}</div>}
    </div>
  )
}
