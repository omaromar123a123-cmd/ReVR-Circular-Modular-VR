export const EVIDENCE = {
  prototype: 'Prototype Assumption — Not Empirically Validated',
  required: 'Data Required / To Be Validated',
  measured: 'Measured',
  manufacturer: 'Manufacturer Data',
  literature: 'Literature-Based Estimate',
  egypt: 'Local Egyptian Market Data',
}

export const metrics = {
  materialSaved: { label: 'Material Saved', value: null, unit: 'g', evidence: EVIDENCE.required, note: 'Requires measured mass of the replaced module versus whole-device replacement.' },
  ewasteAvoided: { label: 'E-Waste Avoided', value: null, unit: 'g', evidence: EVIDENCE.required, note: 'Requires end-of-life mass boundary and verified recovery pathway.' },
  costSaved: { label: 'Estimated Cost Saved', value: null, unit: 'EGP', evidence: EVIDENCE.required, note: 'Requires local replacement prices for the failed module and full-device benchmark.' },
  lifetimeExtension: { label: 'Expected Lifetime Extension', value: null, unit: 'months', evidence: EVIDENCE.required, note: 'Requires longitudinal or validated lifecycle evidence.' },
  repairTime: { label: 'Repair Time', value: null, unit: 'min', evidence: EVIDENCE.required, note: 'Requires controlled repair-time measurements.' },
  replaceableComponents: { label: 'Replaceable Components', value: 6, unit: 'modules', evidence: EVIDENCE.prototype, note: 'Prototype architecture currently defines six replaceable modules.' },
}

export const components = [
  {
    id: 'battery', name: 'Battery Module', short: 'BAT', color: '#7ee2aa', position: [-1.22, -0.12, 0.48], scale: [0.55, 0.18, 0.32], mass: null, cost: null, repairTime: null,
    replaceable: true, failure: 'Capacity degradation / power failure', traditional: 'Replace complete VR device', modular: 'Replace battery module only',
    note: 'Mass, cost and repair time are intentionally blank until validated.'
  },
  {
    id: 'controller', name: 'Controller Module', short: 'CTRL', color: '#9ad6ff', position: [1.08, -0.16, 0.45], scale: [0.34, 0.23, 0.45], mass: null, cost: null, repairTime: null,
    replaceable: true, failure: 'Input sensor / button / wireless failure', traditional: 'Replace complete VR device', modular: 'Replace controller module only',
    note: 'Local replacement price and availability require Egyptian market validation.'
  },
  {
    id: 'strap', name: 'Head Strap', short: 'STRAP', color: '#e4c27d', position: [0, 0.88, -0.05], scale: [1.34, 0.11, 0.18], mass: null, cost: null, repairTime: null,
    replaceable: true, failure: 'Wear / breakage / fit mechanism failure', traditional: 'Replace complete VR device', modular: 'Replace strap assembly only',
    note: 'Use controlled wear tests to validate lifetime and replacement frequency.'
  },
  {
    id: 'housing', name: 'Outer Housing', short: 'SHELL', color: '#d8dfdc', position: [0, -0.05, -0.62], scale: [1.62, 0.58, 0.18], mass: null, cost: null, repairTime: null,
    replaceable: true, failure: 'Crack / structural damage / cosmetic wear', traditional: 'Replace complete VR device', modular: 'Replace housing panels or shell module',
    note: 'Material composition should be measured or obtained from verified manufacturer data.'
  },
  {
    id: 'optical', name: 'Optical / Front Module', short: 'OPT', color: '#cfb8ff', position: [0, -0.18, 0.77], scale: [1.02, 0.44, 0.18], mass: null, cost: null, repairTime: null,
    replaceable: true, failure: 'Lens / display / optical assembly failure', traditional: 'Replace complete VR device', modular: 'Replace optical/front module only',
    note: 'Optical module boundary should be defined in a physical teardown study.'
  },
  {
    id: 'board', name: 'Electronic Board', short: 'PCB', color: '#ffab9f', position: [0, -0.16, -0.02], scale: [0.84, 0.42, 0.10], mass: null, cost: null, repairTime: null,
    replaceable: true, failure: 'Processor / connectivity / power electronics failure', traditional: 'Replace complete VR device', modular: 'Replace electronic board only',
    note: 'Board-level serviceability and anti-tamper design need validation.'
  },
]

export const validationFields = [
  'Component availability in Egypt',
  'Local vs imported components',
  'Replacement cost',
  'Average repair time',
  'Availability of spare parts',
  'Repair technician accessibility',
  'End-of-life collection pathway',
  'Recycling pathway',
  'Local material recovery potential',
].map((field) => ({ field, value: null, source: '', date: '', evidence: EVIDENCE.required, confidence: '' }))

export const circularityParameters = [
  { id: 'repairability', label: 'Repairability', value: null },
  { id: 'replaceability', label: 'Replaceability', value: null },
  { id: 'recovery', label: 'Material Recovery', value: null },
  { id: 'spares', label: 'Spare-Part Availability', value: null },
  { id: 'lifetime', label: 'Expected Lifetime Extension', value: null },
]

export const assumptionsNotice = 'All placeholder values are experimental assumptions only. Replace them with measurements or verified sources before making impact claims.'
