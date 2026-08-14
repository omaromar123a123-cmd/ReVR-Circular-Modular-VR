import React, { useMemo, useState } from 'react'
import { ArrowRight, Boxes, Database, Gauge, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'
import { motion } from 'framer-motion'
import VRViewer from './components/VRViewer'
import ComponentCard from './components/ComponentCard'
import ScenarioComparison from './components/ScenarioComparison'
import ImpactDashboard from './components/ImpactDashboard'
import ValidationTable from './components/ValidationTable'
import CircularityScore from './components/CircularityScore'
import MethodologyPanel from './components/MethodologyPanel'
import SectionHeading from './components/SectionHeading'
import { components, assumptionsNotice } from './data/revrData'

const nav = [
  ['dashboard', 'Dashboard'], ['hardware', '3D Hardware'], ['comparison', 'Scenarios'], ['validation', 'Egypt Validation'], ['index', 'Circularity Index']
]

export default function App() {
  const [selectedId, setSelectedId] = useState('battery')
  const [menuOpen, setMenuOpen] = useState(false)
  const selected = useMemo(() => components.find((item) => item.id === selectedId) ?? components[0], [selectedId])

  const jump = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return <div className="min-h-screen text-slate-900">
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f3f5f2]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => jump('top')} className="flex items-center gap-3 text-left"><div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg"><Boxes size={19}/></div><div><div className="text-sm font-black tracking-wide">ReVR</div><div className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700">Circular Modular VR</div></div></button>
        <nav className="hidden items-center gap-1 lg:flex">{nav.map(([id, label]) => <button key={id} onClick={() => jump(id)} className="rounded-xl px-3 py-2 text-xs font-bold text-slate-500 hover:bg-white hover:text-slate-900">{label}</button>)}</nav>
        <button onClick={() => setMenuOpen(v => !v)} className="rounded-xl border border-slate-200 bg-white p-2 lg:hidden">{menuOpen ? <X size={18}/> : <Menu size={18}/>}</button>
      </div>
      {menuOpen && <div className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden">{nav.map(([id, label]) => <button key={id} onClick={() => jump(id)} className="block w-full rounded-xl px-3 py-3 text-left text-sm font-bold text-slate-600">{label}</button>)}</div>}
    </header>

    <main id="top">
      <section className="grid-bg overflow-hidden border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700"><Sparkles size={13}/> Interactive Research Prototype</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-slate-950 sm:text-6xl">From disposable hardware<br/><span className="text-emerald-700">to modular hardware.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">ReVR is a circular-design hypothesis for VR hardware built around modularity, repairability, replaceable components, and end-of-life material recovery.</p>
            <div className="mt-8 flex flex-wrap gap-3"><button onClick={() => jump('hardware')} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-slate-950/10 hover:bg-slate-800">Explore 3D Hardware <ArrowRight size={16}/></button><button onClick={() => jump('validation')} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:border-emerald-300"><Database size={16}/> Validation Layer</button></div>
            <div className="mt-8 flex flex-wrap gap-2"><span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-500">Research Prototype</span><span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-500">Evidence-First</span><span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-500">Egypt Validation Ready</span></div>
          </div>
          <div className="panel rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between"><div><div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Research Question</div><div className="mt-1 text-lg font-black">Can modular VR reduce replacement burden?</div></div><Gauge className="text-emerald-700" size={20}/></div>
            <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-red-100 bg-red-50 p-4"><div className="text-[10px] font-black uppercase tracking-widest text-red-600">Traditional</div><div className="mt-2 text-sm font-bold leading-6">One component fails → whole product at risk.</div></div><div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4"><div className="text-[10px] font-black uppercase tracking-widest text-emerald-700">ReVR</div><div className="mt-2 text-sm font-bold leading-6">One component fails → one module is replaced.</div></div></div>
            <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-white"><div className="grid grid-cols-5 gap-2 text-center text-[9px] font-bold uppercase tracking-wider text-slate-300"><span>Design</span><span>Measure</span><span>Validate</span><span>Improve</span><span>Scale</span></div><div className="mt-4 h-px bg-slate-700"/><p className="mt-4 text-center text-xs leading-5 text-slate-400">The prototype communicates a hypothesis and validation methodology — not proven environmental impact.</p></div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><SectionHeading eyebrow="01 / Research Metrics" title="Impact Dashboard">Placeholder values are explicitly labeled. Replace them with real measurements as the research program progresses.</SectionHeading><ImpactDashboard/><div className="mt-6"><MethodologyPanel/></div></section>

      <section id="hardware" className="mx-auto max-w-7xl px-5 py-8 lg:px-8"><SectionHeading eyebrow="02 / Interactive Hardware" title="Disassemble the concept">The 3D model is intentionally simplified for research communication. The clickable module boundaries represent the proposed architecture.</SectionHeading><div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]"><VRViewer items={components} selectedId={selectedId} onSelect={setSelectedId}/><ComponentCard item={selected}/></div></section>

      <section id="comparison" className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><SectionHeading eyebrow="03 / Scenario Comparison" title="Two pathways after component failure">ReVR changes the unit of intervention from the complete device to the affected module.</SectionHeading><ScenarioComparison/></section>

      <section id="validation" className="border-y border-slate-200 bg-[#eef2ee]"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><SectionHeading eyebrow="04 / Egypt Deployment & Validation" title="Build the local evidence layer">Every value should carry a source, date, evidence type, and confidence level before it becomes an impact claim.</SectionHeading><ValidationTable/><div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-xs leading-6 text-amber-900"><strong>Validation rule:</strong> {assumptionsNotice}</div></div></section>

      <section id="index" className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><SectionHeading eyebrow="05 / Experimental Metric" title="ReVR Prototype Circularity Index">A transparent research metric based on measurable parameters, not an internationally certified sustainability score.</SectionHeading><CircularityScore/></section>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 lg:px-8"><div className="rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white md:px-12"><div className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300">Final Research Statement</div><h2 className="text-3xl font-black tracking-tight md:text-5xl">ReVR does not assume sustainability.<br/><span className="text-emerald-300">It measures it.</span></h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">Design → Measure → Validate → Improve → Scale</p><div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-300"><span className="rounded-full border border-white/10 px-3 py-2">Circular Design</span><span className="rounded-full border border-white/10 px-3 py-2">Repairability</span><span className="rounded-full border border-white/10 px-3 py-2">Material Recovery</span><span className="rounded-full border border-white/10 px-3 py-2">Egypt Validation</span></div></div></section>
    </main>

    <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><b className="text-slate-900">ReVR — Circular Modular VR</b> · Interactive Engineering Research Prototype</div><div className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-emerald-700"/> Evidence status is part of the interface.</div></div></footer>
  </div>
}
