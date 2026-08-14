export function displayValue(value, unit = '') {
  if (value === null || value === undefined || value === '') return 'Data Required'
  return `${value}${unit ? ` ${unit}` : ''}`
}

export function calculateCircularityScore(parameters) {
  const usable = parameters.filter((item) => typeof item.value === 'number' && Number.isFinite(item.value))
  if (!usable.length || usable.length !== parameters.length) return null
  const sum = usable.reduce((total, item) => total + item.value, 0)
  return Math.round(sum / usable.length)
}
