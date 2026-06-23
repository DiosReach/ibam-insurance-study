import {
  AlertCircle,
  ArrowLeft,
  Car,
  Info,
  Receipt,
  ShieldCheck,
  TrendingDown,
  TrendingUp
} from 'lucide-react'
import { useMemo, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────
// Illustrative-only model. The 2026 Autopac premium structure is set by
// MPI and approved by the Public Utilities Board; these numbers are for
// study purposes and roughly capture the relative effect of each lever
// (deductible, liability limit, DSR level, vehicle value).
// ─────────────────────────────────────────────────────────────────────

const VEHICLE_USE = [
  { id: 'pleasure',  label: 'Pleasure / Commuter', factor: 1.00 },
  { id: 'business',  label: 'Business / Light Commercial', factor: 1.35 },
  { id: 'farm',      label: 'Farm Use', factor: 0.85 }
]

const TERRITORIES = [
  { id: 'winnipeg', label: 'Winnipeg', factor: 1.20 },
  { id: 'urban',    label: 'Other Urban (Brandon, Steinbach…)', factor: 1.00 },
  { id: 'rural',    label: 'Rural Manitoba', factor: 0.85 }
]

const LIABILITY_OPTIONS = [
  { id: 500000,    label: '$500,000 (Basic)',  premiumAdd:   0 },
  { id: 1000000,   label: '$1,000,000',         premiumAdd:  35 },
  { id: 2000000,   label: '$2,000,000',         premiumAdd:  60 },
  { id: 5000000,   label: '$5,000,000',         premiumAdd:  95 },
  { id: 10000000,  label: '$10,000,000',        premiumAdd: 140 }
]

const DEDUCTIBLE_OPTIONS = [
  { id: 200,  label: '$200',  adj:  +220 },
  { id: 500,  label: '$500',  adj:   +90 },
  { id: 1000, label: '$1,000 (Basic 2026)', adj: 0 },
  { id: 1500, label: '$1,500', adj:  -55 },
  { id: 2500, label: '$2,500', adj: -110 }
]

// DSR scale: -20 (worst) … 0 (base) … +20 (best, top of 2026 scale)
// Top of scale = up to 53% off vehicle premium (per MPI 2026 changes)
function dsrDiscount(level) {
  if (level >= 0) {
    // Smooth curve to 53% at +20
    return Math.min(0.53, 0.0265 * level)
  }
  // Surcharge below 0 — linear up to +200% at -20
  return level * 0.10
}

function formatCAD(n) {
  if (!isFinite(n)) return '—'
  return n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 })
}

export default function MPICalculatorView({ onBack }) {
  const [vehicleValue, setVehicleValue]   = useState(35000)
  const [useId,        setUseId]          = useState('pleasure')
  const [territoryId,  setTerritoryId]    = useState('winnipeg')
  const [liabilityId,  setLiabilityId]    = useState(500000)
  const [deductibleId, setDeductibleId]   = useState(1000)
  const [dsrLevel,     setDsrLevel]       = useState(5)

  const result = useMemo(() => {
    const use        = VEHICLE_USE.find(u => u.id === useId) ?? VEHICLE_USE[0]
    const territory  = TERRITORIES.find(t => t.id === territoryId) ?? TERRITORIES[0]
    const liability  = LIABILITY_OPTIONS.find(l => l.id === liabilityId) ?? LIABILITY_OPTIONS[0]
    const deductible = DEDUCTIBLE_OPTIONS.find(d => d.id === deductibleId) ?? DEDUCTIBLE_OPTIONS[2]

    // Base vehicle premium scales with ACV (logarithmic for older cars)
    const baseVehicle = 380 + Math.sqrt(Math.max(vehicleValue, 1)) * 5.6
    const territoryAdj = baseVehicle * (territory.factor - 1)
    const useAdj       = baseVehicle * (use.factor - 1)

    const subtotalVehicle = baseVehicle + territoryAdj + useAdj
    const dsrDisc = dsrDiscount(dsrLevel)
    // Discount applies only on vehicle premium portion; surcharge as negative discount
    const dsrEffect  = subtotalVehicle * (-dsrDisc)
    const afterDsr   = subtotalVehicle + dsrEffect

    const deductibleAdj = deductible.adj
    const liabilityAdj  = liability.premiumAdd

    // PIPP is included in registration but for display we surface a baseline
    const pippIncluded = 195

    const annual = Math.max(180, afterDsr + deductibleAdj + liabilityAdj)
    const monthly = annual / 12

    // Top-of-scale licence discount up to $30
    const licenceDiscount = dsrLevel >= 0 ? Math.min(30, dsrLevel * 1.5) : 0

    return {
      baseVehicle,
      territoryAdj,
      useAdj,
      subtotalVehicle,
      dsrDiscPct: dsrDisc * 100,
      dsrEffect,
      afterDsr,
      deductibleAdj,
      liabilityAdj,
      pippIncluded,
      annual,
      monthly,
      licenceDiscount
    }
  }, [vehicleValue, useId, territoryId, liabilityId, deductibleId, dsrLevel])

  return (
    <div className="space-y-5 animate-fade-in">
      <button
        onClick={onBack}
        className="md:hidden inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600"
      >
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </button>

      <header className="rounded-2xl bg-gradient-to-br from-rose-600 to-rose-900 p-6 text-white shadow-xl shadow-rose-900/20">
        <div className="flex items-center gap-2 text-rose-100 text-xs font-bold uppercase tracking-wider">
          <Car className="w-4 h-4" /> Manitoba — Autopac
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
          MPI Premium Calculator
        </h1>
        <p className="mt-2 text-rose-100 text-sm max-w-2xl">
          Adjust the levers below to see how each Autopac factor (vehicle value, use, territory, deductible, liability, DSR) shifts the premium structure. <strong>Illustrative only — actual rates are set by MPI and approved by the PUB.</strong>
        </p>
      </header>

      <div className="grid lg:grid-cols-5 gap-4">
        {/* ─── Inputs ──────────────────────────────────────────────── */}
        <section className="lg:col-span-3 space-y-4">
          {/* Vehicle value */}
          <Card>
            <Label icon={Car}>Vehicle ACV</Label>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="range"
                min={3000}
                max={150000}
                step={1000}
                value={vehicleValue}
                onChange={e => setVehicleValue(Number(e.target.value))}
                className="flex-1 accent-rose-600"
              />
              <span className="font-bold text-lg w-28 text-right text-slate-900 dark:text-white tabular-nums">
                {formatCAD(vehicleValue)}
              </span>
            </div>
            {vehicleValue > 50000 && (
              <p className="mt-2 text-xs inline-flex items-center gap-1 text-amber-700 dark:text-amber-300">
                <AlertCircle className="w-3 h-3" /> Basic all-perils caps at $50,000 — values above need Extension Excess Value.
              </p>
            )}
          </Card>

          {/* Use */}
          <Card>
            <Label>Vehicle Use</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {VEHICLE_USE.map(opt => (
                <PillButton key={opt.id} active={useId === opt.id} onClick={() => setUseId(opt.id)}>
                  {opt.label}
                </PillButton>
              ))}
            </div>
          </Card>

          {/* Territory */}
          <Card>
            <Label>Territory</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {TERRITORIES.map(opt => (
                <PillButton key={opt.id} active={territoryId === opt.id} onClick={() => setTerritoryId(opt.id)}>
                  {opt.label}
                </PillButton>
              ))}
            </div>
          </Card>

          {/* Liability */}
          <Card>
            <Label icon={ShieldCheck}>Third-Party Liability</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {LIABILITY_OPTIONS.map(opt => (
                <PillButton key={opt.id} active={liabilityId === opt.id} onClick={() => setLiabilityId(opt.id)}>
                  {opt.label}
                </PillButton>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Basic = $500K. Extension up to $10M; higher amounts via Special Risk Extension (SRE).
            </p>
          </Card>

          {/* Deductible */}
          <Card>
            <Label>All-Perils Deductible</Label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2">
              {DEDUCTIBLE_OPTIONS.map(opt => (
                <PillButton key={opt.id} active={deductibleId === opt.id} onClick={() => setDeductibleId(opt.id)}>
                  {opt.label}
                </PillButton>
              ))}
            </div>
          </Card>

          {/* DSR */}
          <Card>
            <Label icon={TrendingUp}>Driver Safety Rating (DSR Level)</Label>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="range"
                min={-20}
                max={20}
                step={1}
                value={dsrLevel}
                onChange={e => setDsrLevel(Number(e.target.value))}
                className="flex-1 accent-rose-600"
              />
              <span className={`font-extrabold text-lg w-16 text-right tabular-nums
                ${dsrLevel >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {dsrLevel > 0 ? `+${dsrLevel}` : dsrLevel}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>−20 (worst)</span>
              <span>0 (base / new driver)</span>
              <span>+20 (top — 2026)</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              <Bullet color="emerald" label={`Vehicle discount: ${result.dsrDiscPct >= 0 ? '−' : '+'}${Math.abs(result.dsrDiscPct).toFixed(0)}%`} />
              <Bullet color="emerald" label={`Licence discount: ${formatCAD(result.licenceDiscount)}`} />
            </div>
          </Card>
        </section>

        {/* ─── Result ────────────────────────────────────────────── */}
        <aside className="lg:col-span-2 space-y-3 lg:sticky lg:top-6 self-start">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <Receipt className="w-3.5 h-3.5" /> Estimated annual premium
            </div>
            <p className="mt-2 text-4xl font-extrabold tracking-tight">{formatCAD(result.annual)}</p>
            <p className="mt-1 text-sm text-slate-300">≈ {formatCAD(result.monthly)} / month</p>
            <div className="mt-4 pt-4 border-t border-slate-700 space-y-2 text-xs">
              <Row label="Base vehicle"             value={formatCAD(result.baseVehicle)} />
              <Row label="Territory adjustment"     value={fmtDelta(result.territoryAdj)} />
              <Row label="Use adjustment"           value={fmtDelta(result.useAdj)} />
              <Row label={`DSR effect (${result.dsrDiscPct >= 0 ? '−' : '+'}${Math.abs(result.dsrDiscPct).toFixed(0)}%)`}
                   value={fmtDelta(result.dsrEffect)}
                   tone={result.dsrEffect <= 0 ? 'good' : 'bad'} />
              <Row label="Deductible adjustment"    value={fmtDelta(result.deductibleAdj)} tone={result.deductibleAdj < 0 ? 'good' : result.deductibleAdj > 0 ? 'bad' : 'neutral'} />
              <Row label="Liability upgrade"        value={fmtDelta(result.liabilityAdj)} tone="bad" />
              <Row label="PIPP (registration fee, illustrative)" value={formatCAD(result.pippIncluded)} faded />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-xs text-slate-600 dark:text-slate-300 flex gap-2">
            <Info className="w-4 h-4 shrink-0 text-brand-600 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Study takeaways</p>
              <ul className="space-y-1 list-disc list-inside marker:text-slate-400">
                <li>Top of the 2026 DSR scale = up to <strong>53% off</strong> vehicle premium and <strong>$30</strong> off licence.</li>
                <li>One at-fault claim = <strong>−5 DSR levels</strong>. Impaired driving = <strong>−10 levels</strong>. Impaired causing death = <strong>−15 levels</strong>.</li>
                <li>Basic deductible is <strong>$1,000</strong> as of April 1, 2026 (raised from $750).</li>
                <li>Liability beyond $10M requires <strong>Special Risk Extension (SRE)</strong>.</li>
                <li>Vehicles over <strong>$50,000</strong> ACV need Extension Excess Value coverage.</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

/* ─── helpers ────────────────────────────────────────────────────── */

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
      {children}
    </div>
  )
}

function Label({ children, icon: Icon }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </div>
  )
}

function PillButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-semibold px-3 py-2 rounded-lg transition leading-tight
        ${active
          ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'}`}
    >
      {children}
    </button>
  )
}

function Bullet({ color, label }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md font-semibold
      ${color === 'emerald'
        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>
      <TrendingDown className="w-3 h-3" />
      {label}
    </span>
  )
}

function Row({ label, value, tone, faded }) {
  let cls = 'text-slate-300'
  if (tone === 'good') cls = 'text-emerald-400'
  if (tone === 'bad')  cls = 'text-rose-400'
  if (faded) cls = 'text-slate-500'
  return (
    <div className="flex items-center justify-between">
      <span className={faded ? 'text-slate-500' : 'text-slate-300'}>{label}</span>
      <span className={`font-mono font-semibold tabular-nums ${cls}`}>{value}</span>
    </div>
  )
}

function fmtDelta(n) {
  if (Math.abs(n) < 1) return '—'
  return (n >= 0 ? '+' : '−') + Math.abs(n).toLocaleString('en-CA', { maximumFractionDigits: 0 })
}
